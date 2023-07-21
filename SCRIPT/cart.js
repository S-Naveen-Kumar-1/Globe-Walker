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
let paymentArr= JSON.parse(localStorage.getItem("paymentData"))||[]
displayHotelPlaces(hotelArr)
//Moe Info selectores
let leftArrow= document.querySelector(".leftArrow");
let rightArrow= document.querySelector(".rightArrow");
let moreInfo_Sliding_Image = document.querySelector(".moreInfo_Sliding_Image");
let LcoationDescription= document.querySelector(".LcoationDescription");
let LcoationDescriptionDiv=document.querySelector(".LcoationDescriptionDiv");
let MoreInfoCloseBtn = document.querySelector(".close");




function displayHotelPlaces(data){
  // console.log(data)


container.innerHTML=null

    for(let i=0;i<data.length;i++){
     
         let card=document.createElement("div");
             let image=document.createElement("img");
            //  let tripStartDate=document.createElement("h5");
            //  let seats_Available=document.createElement("h5");
             let price=document.createElement("h5");
             let location=document.createElement("h3");
             let card2=document.createElement("div");
            //  let card3=document.createElement("div");
             let rating=document.createElement("h4");
             let stars=document.createElement("div");
            //  let days=document.createElement("p");
             let enquiry=document.createElement("button");
             let addCartBtn=document.createElement("button");
             let country=document.createElement("h3");
                 country.innerText=data[i].country;

                //  adding card to ls and later will append to cart page
          
                 addCartBtn.addEventListener("click",function(){
                 
                    data[i].quantity=1;
                    paymentArr.push(data[i])
                    localStorage.setItem("paymentData",JSON.stringify(paymentArr))
                    alert ("Package added to Payment Page")
                  
              })

             let card4=document.createElement("div");
                 card4.setAttribute("class","enquiry_ToCartDiv");

            //  let card5 =document.createElement("div");
            //      card5.setAttribute("class","middleDiv");
            //      card5.append(price);  
                   
             let moreInfo = document.createElement("h5");
                 moreInfo.innerText="More Info";
                 moreInfo.setAttribute("class","moreInfo");   
                 
            // tripStartDate.innerText="Trip Start Date: "+data[i].startDate;
            // tripStartDate.setAttribute("class","tripStartDate");
 
            // seats_Available.innerText="Seats Available: "+data[i].seatsAvailable;
            // seats_Available.setAttribute("class","seats_Available");
           
            price.innerText="Price: Rs."+data[i].price+"/Person";
            price.setAttribute("class","price");
             
             image.src=data[i].image;
             location.innerText=data[i].location+", "+data[i].country;
             location.setAttribute("class","location");
             rating.innerText=data[i].rating;
            //  days.innerText=data[i].day;
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
            
             enquiry.innerText="DELETE";
             enquiry.setAttribute("class","enquiryBtn");

             addCartBtn.innerText="Buy Now";
             addCartBtn.setAttribute("class","addCartBtn");

             card2.append(rating,stars);
            //  card3.append(days,card2);
             card4.append(enquiry,addCartBtn);
             card2.id="rating";
            //  card3.id="day_rating";
             card.append(image,card2,location,price,moreInfo,card4);
             container.append(card);
     
 
                enquiry.addEventListener("click",function(){
                    console.log("hi")
                    hotelArr=hotelArr.filter(function(el){
                        return el.id != data[i].id
                      })

                      localStorage.setItem("cartData",JSON.stringify(hotelArr))
                      displayHotelPlaces(hotelArr)
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
