// get in touch form deatails storing to local storage

let formName=document.getElementById("name");
let formEmail=document.getElementById("email")
let formMessage=document.getElementById("message");
let formBtn=document.getElementById("form-btn");

let formDetails=JSON.parse(localStorage.getItem("formDetails")) || []

formBtn.addEventListener("click",function(){
    let formObj={
    name:formName.value,
    email:formEmail.value,
    message:formMessage.value
    }
    formDetails.push(formObj)
 localStorage.setItem("formDetails",JSON.stringify(formDetails))
})

