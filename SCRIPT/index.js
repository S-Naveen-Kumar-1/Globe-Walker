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


//three cards btn linked to hotel page

let threeCardBtn1=document.querySelector(".threeCardBtn1");
let threeCardBtn2=document.querySelector(".threeCardBtn2")
let threeCardBtn3=document.querySelector(".threeCardBtn3")

threeCardBtn1.addEventListener("click",function(){
    window.location.href="./hotels.html"
})
threeCardBtn2.addEventListener("click",function(){
    window.location.href="./hotels.html"
})
threeCardBtn3.addEventListener("click",function(){
    window.location.href="./hotels.html"
})


//for mountain image slideshow

let mauntain1= document.getElementById("mountain1");
let mauntain2 = document.getElementById("mountain2")

let temparr = ["https://wallpapercave.com/wp/wp2506817.jpg","https://getwallpapers.com/wallpaper/full/4/a/8/1200094-best-4k-ultra-hd-nature-wallpaper-1920x1080-picture.jpg"]

let slideshow1 = imageSlideShow(1500);
 
slideshow1();

function imageSlideShow(time){
    let i=1
return function imageSlideShow1(){
  
   setInterval(()=>{
   console.log(i);
    if(i==1){
        mauntain1.style.display="grid";
        mauntain2.style.display="none";
        i++;
    }
    else if(i==2){
        mauntain1.style.display="none";
        mauntain2.style.display="grid";
        i--;
    }
},time)
}
}

