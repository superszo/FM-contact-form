let submit = document.getElementById("submit");
let inputs = document.querySelectorAll(".req")
let email = document.getElementById("email")
let radios = document.querySelectorAll(".option")
let consent = document.getElementById("consent")

function validateForm() {
    const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    result = true;

    inputs.forEach(item => {
        if (!item.value) {
            
            item.parentElement.children.item(2).classList.add("show-err")
            result &= false;
        } else {
            result &= true;
        }
        
    })
    

    if (!email.value.match(regex)) {
        email.parentElement.children.item(2).classList.add("show-err")
        result &= false;
        } else {
        result &= true;
    }


    if (document.querySelectorAll(".option:checked").length === 0) {
        document.getElementById("radio-error").classList.add("show-err")
        result &= false;
        } else {
        result &= true;
    }



    if (!consent.checked) {
        consent.parentElement.children.item(2).classList.add("show-err")
        result &= false;
        } else {
        result &= true;
    }

    return result;
}


document.forms[0].addEventListener('change', () => {
    let form = document.forms[0];
    for (i = 0; 1 < form.length; i++) {
        if (form[i].checked) {
            form[i].parentElement.style.backgroundColor = "#E0F1E8";
        } else {
            form[i].parentElement.style.backgroundColor = "#FFFFFF"
        }
    }
})


inputs.forEach(item => {
    item.addEventListener('input', () => {
        item.parentElement.children.item(2).classList.remove("show-err")

    })
})

radios.forEach(option => {
    option.addEventListener('change', () => {
        if (document.getElementById("radio-error").classList.contains("show-err")) {
            document.getElementById("radio-error").classList.remove("show-err")
        }
    })
})




submit.addEventListener("click", function(e){
    e.preventDefault();

    

    if (validateForm()) {
        //send to server 

        document.getElementById("success").classList.add("show")
        setTimeout(() => {
            document.getElementById("success").classList.remove("show")
        }, 5000)
    }

 


})


