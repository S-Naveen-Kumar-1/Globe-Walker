//selectors for div above navBar
let twitter = document.querySelector(".twitterImg");
let facebook = document.querySelector(".facebookImg");
let linkedIn = document.querySelector(".linkedInImg");
let insta = document.querySelector(".instaImg");
let youTube = document.querySelector(".youTubeImg");

//code for div Above navBar
twitter.addEventListener("click",()=>{
    window.open("https://twitter.com/");
});
facebook.addEventListener("click",()=>{
    window.open("https://facebook.com/");
});
linkedIn.addEventListener("click",()=>{
    window.open("https://in.linkedin.com/");
});
insta.addEventListener("click",()=>{
    window.open("https://www.instagram.com/");
});
youTube.addEventListener("click",()=>{
    window.open("https://www.youtube.com/");
});

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

