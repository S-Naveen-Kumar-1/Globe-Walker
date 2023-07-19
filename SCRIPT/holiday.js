let container = document.getElementById("container");


//Moe Info selectores
let leftArrow= document.querySelector(".leftArrow");
let rightArrow= document.querySelector(".rightArrow");
let moreInfo_Sliding_Image = document.querySelector(".moreInfo_Sliding_Image");
let LcoationDescription= document.querySelector(".LcoationDescription");
let LcoationDescriptionDiv=document.querySelector(".LcoationDescriptionDiv");
let MoreInfoCloseBtn = document.querySelector(".close");

let arr = [ {
    id:"1",
    location:"Rajasthan",
    description:"Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, spicy food, colourful and large turbans, extensive golden sand desert, camels and rich handicraft. It is therefore, an incredible place to visit in India for enjoying unforgettable holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and more.",
    price:50000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/rajasthan-tour-packages.webp",
    moreImage:["https://geringerglobaltravel.com/wp-content/uploads/2015/06/shutterstock_87125977-1-copy.jpg","https://wallpapercave.com/wp/wp4021285.jpg","https://media.cntraveller.in/wp-content/uploads/2018/12/nahargarh-fort-view-shutterstock_512605621.jpg"],
    rating:"4.0",
    day:"10 Nights - 11 Days",
    startDate:"2023/24/07",
    seatsAvailable:30,
    country:"India",
},
{
    id:"2",
    location:"Himachal",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:20000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/himachal-hill-stations.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"3.0",
    day:"4 Nights - 5 Days",
    startDate:"2023/25/07",
    seatsAvailable:25,
    country:"India",
},

]

displayPopularPlaces(arr)

function displayPopularPlaces(data){

    for(let i=0;i<2;i++){
     
         let card=document.createElement("div");
             let image=document.createElement("img");
             let tripStartDate=document.createElement("h5");
             let seats_Available=document.createElement("h5");
             let price=document.createElement("h5");
             let location=document.createElement("h3");
             let card2=document.createElement("div");
             let card3=document.createElement("div");
             let rating=document.createElement("h4");
             let stars=document.createElement("div");
             let days=document.createElement("p");
             let enquiry=document.createElement("button");
             let addCartBtn=document.createElement("button");
             let country=document.createElement("h3");
                 country.innerText=data[i].country;

             let card4=document.createElement("div");
                 card4.setAttribute("class","enquiry_ToCartDiv");

             let card5 =document.createElement("div");
                 card5.setAttribute("class","middleDiv");
                 card5.append(seats_Available,price);  
                   
             let moreInfo = document.createElement("h5");
                 moreInfo.innerText="More Info";
                 moreInfo.setAttribute("class","moreInfo");   
                 
            tripStartDate.innerText="Trip Start Date: "+data[i].startDate;
            tripStartDate.setAttribute("class","tripStartDate");
 
            seats_Available.innerText="Seats Available: "+data[i].seatsAvailable;
            seats_Available.setAttribute("class","seats_Available");
           
            price.innerText="Price: Rs."+data[i].price+"/Person";
            price.setAttribute("class","price");
             
             image.src=data[i].image;
             location.innerText=data[i].location+", "+data[i].country;
             location.setAttribute("class","location");
             rating.innerText=data[i].rating;
             days.innerText=data[i].day;
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
             card3.append(days,card2);
             card4.append(enquiry,addCartBtn);
             card2.id="rating";
             card3.id="day_rating";
             card.append(image,card3,location,seats_Available,price,tripStartDate,moreInfo,card4);
             container.append(card);
     
 
             enquiry.addEventListener("click",()=>{
                 enquiry_openForm();
             })

             moreInfo.addEventListener("click",()=>{
                moreInfo_openForm();
                moreInfo_Sliding_Image.src=data[i].moreImage[0];
                LcoationDescription.innerText=data[i].description;
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
