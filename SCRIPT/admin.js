//searchButon
let searchByButton = document.getElementById("search-by-button");
let searchByInput = document.getElementById("search-by-input");

const bookURL = `https://globe-walker-bjxi.onrender.com/hotels`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let hotelTitleInput = document.getElementById("hotel-title");
let hotelImageInput = document.getElementById("hotel-image");
let hotelRatingInput = document.getElementById("hotel-rating");
let hotelPriceInput = document.getElementById("hotel-price");
let hotelCreateBtn = document.getElementById("add-hotel");

// Update book
let updateHotelIdInput = document.getElementById("hotel-id");
let updateHotelTitleInput = document.getElementById("update-hotel-title");
let updateHotelImageInput = document.getElementById("update-hotel-image");
let updateHotelPriceInput = document.getElementById("update-hotel-price");
let updateHotelBtn = document.getElementById("update-hotel");
let updateHotelRatingInput = document.getElementById("update-hotel-rating")



//Hotels Data
let booksData = [];
let container = document.getElementById("container");
let mainData=null;



async function getdata(){
  try{
      let res = await fetch(bookURL);
      let data = await res.json();
        displayHotelPlaces(data)
        mainData=data;
  }
  catch(err){
      console.log(err)
  }
}

getdata()


function displayHotelPlaces(data){
  // console.log(data)
     container.innerHTML="";
    for(let i=0;i<data.length;i++){
     
         let card=document.createElement("div");
             let image=document.createElement("img");
             let price=document.createElement("h4");
             let location=document.createElement("h3");
             let title=document.createElement("h3");
             let card2=document.createElement("div");
             let card3=document.createElement("div");
             let rating=document.createElement("h4");
             let stars=document.createElement("div");
             let enquiry=document.createElement("button");
             let addCartBtn=document.createElement("button");
             let country=document.createElement("h3");
                 country.innerText=data[i].country;
                 card.className="cardDiv"


                 rating.setAttribute("class","oldrating")

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
                 
            price.innerText="₹ "+data[i].price+"/Head";
            price.setAttribute("class","price");
             
             image.src=data[i].image;
             title.innerText=data[i].title;
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
            
             let link = document.createElement("button");
             link.setAttribute("href", "#");
             link.setAttribute("data-id", data[i].id)
             link.classList.add('card-link')
             link.innerText = "Edit";

             let btn = document.createElement("button");
             btn.classList.add('card-button')
             btn.innerText = "Delete";
             btn.setAttribute("data-id", data[i].id)
              
    

             addCartBtn.innerText="Add to cart";
             addCartBtn.setAttribute("class","addCartBtn");

             card2.append(rating,stars);
             card4.append(link,btn);
             card2.id="rating";
             card.append(image,card2,title,price,card4);




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

          
              link.addEventListener("click", function (a) {
                a.preventDefault();
                updateHotelIdInput.value = data[i].id;
                updateHotelImageInput.value = data[i].image;
                updateHotelPriceInput.value = data[i].price;
                updateHotelTitleInput.value = data[i].title;
                updateHotelRatingInput.value=data[i].rating;
            
              })

           btn.addEventListener("click", function () {
             fetch(`${bookURL}/${data[i].id}`, {
               method: "DELETE",
         
             })
               .then((res) => res.json())
               .then((data) => {
                 getdata();
               })
           })
         
                 }
     
     }









// function appendData(data) {
//   container.innerHTML = null;
//   let cardlist = document.createElement("div");
//   cardlist.className = "card-list";
//   data.forEach(item => {
//     let card = createCard(item)
//     cardlist.append(card)
//   })
//   container.append(cardlist)
// }

// function createCard(item) {
//     // console.log(item)
//   let card = document.createElement("div");
//   card.className = "card";
//   card.setAttribute("data-id", item.id)

//   let imgdiv = document.createElement("div")
//   imgdiv.classList.add("card-img");

//   let img = document.createElement("img");
//   img.setAttribute('src', item.image)
//   img.setAttribute("alt", "hotel");
//   imgdiv.append(img);

//   let cardbody = document.createElement("div")
//   cardbody.classList.add("card-body");

//   let cardtitle = document.createElement("h4");
//   cardtitle.classList.add('card-title')
//   cardtitle.innerText = item.title;

//   let cardauthor = document.createElement("p");
//   cardauthor.classList.add('card-author')
//   cardauthor.innerText = item.rating;



//   let price = document.createElement("p");
//   price.classList.add('card-price')
//   price.innerText = item.price;

//   let link = document.createElement("a");
//   link.setAttribute("href", "#");
//   link.setAttribute("data-id", item.id)
//   link.classList.add('card-link')
//   link.innerText = "Edit";
//   link.addEventListener("click", function (a) {
//     a.preventDefault();
//     console.log("hi")
//     updateHotelIdInput.value = item.id;
 
//     updateHotelImageInput.value = item.image;
//     updateHotelPriceInput.value = item.price
//     updateHotelTitleInput.value = item.title
   

//   })


//   cardbody.append(cardtitle, price,cardauthor, link, btn);

//   card.append(imgdiv, cardbody);
//   return card
// }


hotelCreateBtn.addEventListener("click", function () {
  console.log("hi")
  let newHotel = 
      {
        title: hotelTitleInput.value,
      rating: hotelRatingInput.value,
      image: hotelImageInput.value,
      price: hotelPriceInput.value
    }

  fetch(bookURL, {
    method: "POST",
    body: JSON.stringify(newHotel),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      getdata();

    })
})

updateHotelBtn.addEventListener("click", updatebook);

function updatebook() {
  let updateBook = {
    title: updateHotelTitleInput.value,
    image: updateHotelImageInput.value,
    price: updateHotelPriceInput.value,
    rating:updateHotelRatingInput.value,
  }
  fetch(`${bookURL}/${updateHotelIdInput.value}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(updateBook)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      getdata();
    })
}


searchByButton.addEventListener("click",function(){
  let searched=mainData.filter(function(e){

    if(e.title.toUpperCase().includes(searchByInput.value.toUpperCase())===true){
        return e
    } 
})
 displayHotelPlaces(searched);
})

// newhotel div

let newHotelbtn = document.getElementById("newHotelBtn");
let updateHotelbtn = document.getElementById("updateHotelBtn");
let newHotel = document.getElementById("newHotel");
let updateHotel = document.getElementById("updateHotel1");


forButtons();



function forButtons(){
let i=0;
let j=0;
newHotelbtn.addEventListener("click",function(){
  if(i==0){
  newHotel.style.display="block"
  updateHotel.style.display="none"
  i++;
  }
  else if(i==1){
    newHotel.style.display="none"
    i--;
  }
})

updateHotelbtn.addEventListener("click",function(){

  if(j==0){
  newHotel.style.display="none"
  updateHotel.style.display="block"
  j++;
  }
  else if(j==1){
    updateHotel.style.display="none"
    j--;
  }
})

}






