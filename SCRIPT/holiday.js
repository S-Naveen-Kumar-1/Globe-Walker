//selectors for div above navBar
let twitter = document.querySelector(".twitterImg");
let facebook = document.querySelector(".facebookImg");
let linkedIn = document.querySelector(".linkedInImg");
let insta = document.querySelector(".instaImg");
let youTube = document.querySelector(".youTubeImg");

//selectores for middle div
let search = document.getElementById("searchBar");


//selectors for filter
let byRating = document.getElementById("byRating");
let byPrice = document.getElementById("byPrice");
let bydate = document.getElementById("datefilter");
let container = document.getElementById("container");


//Moe Info selectores
let leftArrow= document.querySelector(".leftArrow");
let rightArrow= document.querySelector(".rightArrow");
let moreInfo_Sliding_Image = document.querySelector(".moreInfo_Sliding_Image");
let LcoationDescription= document.querySelector(".LcoationDescription");
let LcoationDescriptionDiv=document.querySelector(".LcoationDescriptionDiv");
let MoreInfoCloseBtn = document.querySelector(".close");

// add to cart
let hotelArr= JSON.parse(localStorage.getItem("cartData"))||[];


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
    startDatefilter:"2023-07-24",
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
    startDatefilter:"2023-07-25",
    seatsAvailable:25,
    country:"India",
},
{
    id:"3",
    location:"Kerala",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:25000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/kerala-travel-packages.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"5.0",
    day:"3 Nights - 4 Days",
    startDate:"2023/27/07",
    startDatefilter:"2023-07-27",
    seatsAvailable:28,
    country:"India",
},
{
    id:"4",
    location:"Kashmir",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:35000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/jammu-kashmir-packages.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"4.0",
    day:"3 Nights - 9 Days",
    startDate:"2023/29/07",
    startDatefilter:"2023-07-29",
    seatsAvailable:29,
    country:"India",
},
{
    id:"5",
    location:"Sikkim",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:45000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/sikkim-tour-packages.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"4.0",
    day:"3 Nights - 9 Days",
    startDate:"2023/29/07",
    startDatefilter:"2023-07-29",
    seatsAvailable:29,
    country:"India",
},
{
    id:"6",
    location:"Uttarakhand",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:41000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/uttarakhand-packages.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"3.0",
    day:"3 Nights - 9 Days",
    startDate:"2023/29/07",
    startDatefilter:"2023-07-29",
    seatsAvailable:29,
    country:"India",
},
{
    id:"7",
    location:"Gujarat",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:41000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/gujarat-tours.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"3.0",
    day:"3 Nights - 9 Days",
    startDate:"2023/23/07",
    startDatefilter:"2023-07-23",
    seatsAvailable:29,
    country:"India",
},
{
    id:"8",
    location:"Tamil Nadu",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:41000,
    image:"https://www.tourmyindia.com/packages-tour-india/image/tamilnadu-tours.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"4.0",
    day:"4 Nights - 5 Days",
    startDate:"2023/26/07",
    startDatefilter:"2023-07-26",
    seatsAvailable:29,
    country:"India",
},
{
    id:"9",
    location:"Ladakh",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:45000,
    image:"https://www.tourmyindia.com/imgnew/ladakh0.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"3.0",
    day:"4 Nights - 5 Days",
    startDate:"2023/28/07",
    startDatefilter:"2023-07-28",
    seatsAvailable:27,
    country:"India",
},
{
    id:"10",
    location:"Arunachal",
    description:"Tourism in Himachal Pradesh is a major contributor to the state's economy and growth. The Himalayas attracts tourists from all over the world. Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli are popular destinations for both domestic and foreign tourists.The state also has many important Hindu pilgrimage sites with prominent temples like Shri Chamunda Devi Mandir, Naina Devi Temple, Bajreshwari Mata Temple, Jwala Ji Temple, Chintpurni, Baijnath Temple, Bhimakali Temple, Bijli Mahadev and Jakhoo Temple.Manimahesh Lake situated in the Bharmour region of Chamba district is the venue of an annual Hindu pilgrimage trek held in the month of August which attracts lakhs of devotees.The state is also referred to as `Dev Bhoomi` (literally meaning Abode of Gods) due to its mention as such in ancient Hindu texts and occurrence of a large number of historical temples in the state.",
    price:45000,
    image:"https://www.tourmyindia.com/imgnew/arunachal.webp",
    moreImage:["https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/shutterstock_713453605-Copy.jpg","https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2023/05/Hunza-Gilgit-Baltistan-Pakistan_Credit_GettyImages-593703807.jpg?w=780&quality=75&strip=all","https://thumbs.dreamstime.com/b/autumn-scenery-remote-village-november-hunza-pakistan-mountains-blue-sky-background-autumn-scenery-remote-151397102.jpg"],
    rating:"3.0",
    day:"4 Nights - 5 Days",
    startDate:"2023/21/07",
    startDatefilter:"2023-07-21",
    seatsAvailable:27,
    country:"India",
},

]

displayPopularPlaces(arr)

function displayPopularPlaces(data){
     container.innerHTML="";
    for(let i=0;i<arr.length;i++){
     
         let card=document.createElement("div");
             let image=document.createElement("img");
             let tripStartDate=document.createElement("h5");
             let seats_Available=document.createElement("h5");
             let price=document.createElement("h4");
             let location=document.createElement("h3");
             let card2=document.createElement("div");
             let card3=document.createElement("div");
             let rating=document.createElement("h4");
             let stars=document.createElement("div");
             let days=document.createElement("p");
             let enquiry=document.createElement("button");
             let addCartBtn=document.createElement("button");

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
           
            price.innerText="₹ "+data[i].price+"/Head";
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


    //filter part for Search input
    search.addEventListener("input",function(){
        console.log(search.value)
        let searched=arr.filter(function(e){
            if(e.location.toUpperCase().includes(search.value.toUpperCase())===true || e.country.toUpperCase().includes(search.value.toUpperCase())===true){
                return e
            } 
        })
        displayPopularPlaces(searched);
    })

     //filter part for rating
    byRating.addEventListener("change",function(){

        let rate=arr.filter(function(e){
           if(e.rating==byRating.value){
            return e;
           }
        })

        displayPopularPlaces(rate);
        })

     //filter part for price
        byPrice.addEventListener("change",function(){

            if(byPrice.value=="LTH"){
            let low=arr.sort(function(a,b){
                return a.price-b.price
            })

            displayPopularPlaces(low);
        }
        else if(byPrice.value==="HTL"){
            let high=arr.sort(function(a,b){
                return b.price-a.price
            })

            displayPopularPlaces(high);
                    
                }})  
                
                
    // bydate.addEventListener("change",function(){

    // // let newarr = arr.sort((function(e){
    // //    console.log(e.startDatefilter,bydate.value,e.startDatefilter==bydate.value);

    // //     if(e.startDatefilter>=bydate.value){
    // //         return e;
    // //     }

    // // }))
    // // console.log(newarr);
    // // displayPopularPlaces(newarr);

    // // })        
                
                


// functions for enquiry form
function enquiry_openForm() {

    document.getElementById("my_enquiry-form").style.display = "block";
  
  }
  
  function enquiry_closeForm() {
    document.getElementById("my_enquiry-form").style.display = "none";
  }             







