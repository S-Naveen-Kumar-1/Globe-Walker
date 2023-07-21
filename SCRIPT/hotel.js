let container = document.getElementById("container");

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

// storing data to LS 
let hotelArr= JSON.parse(localStorage.getItem("cartData"))||[]

//Moe Info selectores
let leftArrow= document.querySelector(".leftArrow");
let rightArrow= document.querySelector(".rightArrow");
let moreInfo_Sliding_Image = document.querySelector(".moreInfo_Sliding_Image");
let LcoationDescription= document.querySelector(".LcoationDescription");
let LcoationDescriptionDiv=document.querySelector(".LcoationDescriptionDiv");
let MoreInfoCloseBtn = document.querySelector(".close");

async function getdata(){
    try{
        let res = await fetch("./DATA/hotel.json");
        let data = await res.json();
          console.log(data)
          displayHotelPlaces(data)
    }
    catch(err){
        console.log(err)
    }
}
getdata()


function displayHotelPlaces(data){
  // console.log(data)

    for(let i=0;i<data.length;i++){
     
         let card=document.createElement("div");
             let image=document.createElement("img");
             let price=document.createElement("h5");
             let location=document.createElement("h3");
             let card2=document.createElement("div");
             let card3=document.createElement("div");
             let rating=document.createElement("h4");
             let stars=document.createElement("div");
             let enquiry=document.createElement("button");
             let addCartBtn=document.createElement("button");
             let country=document.createElement("h3");
                 country.innerText=data[i].country;

                //  adding card to ls and later will append to cart page
          
                 addCartBtn.addEventListener("click",function(){
                  let flag=true;
                  for(let j=0;j<hotelArr.length;j++){
                      if(hotelArr[j].id==data[i].id){
                        flag = false
                           alert("Package Already in Cart Page, Please Go to Cart Page")
                      }
                  }
                  if(flag){
                    data[i].quantity=1;
                    hotelArr.push(data[i])
                    localStorage.setItem("cartData",JSON.stringify(hotelArr))
                    alert ("Package added to Cart")
                  }
              })

             let card4=document.createElement("div");
                 card4.setAttribute("class","enquiry_ToCartDiv");
                   
             let moreInfo = document.createElement("h5");
                 moreInfo.innerText="More Info";
                 moreInfo.setAttribute("class","moreInfo");   
                 
            price.innerText="Price: Rs."+data[i].price+"/Person";
            price.setAttribute("class","price");
             
             image.src=data[i].image;
             location.innerText=data[i].location+", "+data[i].country;
             location.setAttribute("class","location");
             rating.innerText=data[i].rating;
             for(let j=1;j<=5;j++){
                 let span=document.createElement("span");
                 if(j<=Number(data[i].rating)){
                     span.setAttribute("class","fa fa-star checked");
                 }
                 else{
                     span.setAttribute("class","fa fa-star");
                 }
                 stars.append(span);
             }
            
             enquiry.innerText="Send Enquiry";
             enquiry.setAttribute("class","enquiryBtn");

             addCartBtn.innerText="Add to cart";
             addCartBtn.setAttribute("class","addCartBtn");

             card2.append(rating,stars);
             card4.append(enquiry,addCartBtn);
             card2.id="rating";
             card.append(image,card2,location,price,moreInfo,card4);
             container.append(card);
     
 
             enquiry.addEventListener("click",()=>{
                 enquiry_openForm();
             })

             moreInfo.addEventListener("click",()=>{
                moreInfo_openForm();
                // moreInfo_Sliding_Image.src=data[i].moreImage[0];
                LcoationDescription.innerText=data[i].desciption;
                ArrowFunc(data[i].moreImage,0)
                 
            })
                 }
     
     }


    // More Info popup functions and eventListerners
    //function-1
    function moreInfo_openForm() {
        document.getElementById("moreInfoPopup").style.display = "block";
      }
   
    //function-2  
    function moreInfo_closeForm() {
      document.getElementById("moreInfoPopup").style.display = "none";
    }  
      
    //function-3 
   function ArrowFunc(array,i){
   leftArrow.addEventListener("click",()=>{

      if(i>0){
        i--;
      }
      else if(i==0){
        i=array.length-1;
      }
     moreInfo_Sliding_Image.src=array[i];
     })

     rightArrow.addEventListener("click",()=>{

        if(i<array.length-1){
          i++;
        }
        else if(i==array.length-1){
          i=0;
        }
       moreInfo_Sliding_Image.src=array[i];
       })
    }
 

    MoreInfoCloseBtn.addEventListener("click",()=>{
        moreInfo_closeForm();
    })
