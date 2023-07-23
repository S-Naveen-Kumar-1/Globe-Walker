

const bookURL = `https://globe-walker-bjxi.onrender.com/hotels`;
let mainSection = document.getElementById("data-list-wrapper");

// hotel
let hotelTitleInput = document.getElementById("hotel-title");
let hotelImageInput = document.getElementById("hotel-image");
let hotelRatingInput = document.getElementById("hotel-rating");
let hotelPriceInput = document.getElementById("hotel-price");
let hotelCreateBtn = document.getElementById("add-hotel");

// Update hotel
let updateHotelIdInput = document.getElementById("hotel-id");
let updateHotelTitleInput = document.getElementById("update-hotel-title");
let updateHotelImageInput = document.getElementById("update-hotel-image");
let updateHotelPriceInput = document.getElementById("update-hotel-price");
let updateHotelBtn = document.getElementById("update-hotel");

let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Hotels Data
let booksData = [];
let container = document.getElementById("data-list-wrapper");


function fetchdata(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appendData(data)
    })

    .catch(function (err) {
      console.log(err)
    })
}
fetchdata(bookURL)

function appendData(data) {
  container.innerHTML = null;
  let cardlist = document.createElement("div");
  cardlist.className = "card-list";
  data.forEach(item => {
    let card = createCard(item)
    cardlist.append(card)
  })
  container.append(cardlist)
}

function createCard(item) {
    // console.log(item)
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", item.id)

  let imgdiv = document.createElement("div")
  imgdiv.classList.add("card-img");

  let img = document.createElement("img");
  img.setAttribute('src', item.image)
  img.setAttribute("alt", "hotel");
  imgdiv.append(img);

  let cardbody = document.createElement("div")
  cardbody.classList.add("card-body");

  let cardtitle = document.createElement("h4");
  cardtitle.classList.add('card-title')
  cardtitle.innerText = item.title;

  let cardauthor = document.createElement("p");
  cardauthor.classList.add('card-author')
  cardauthor.innerText = item.rating;



  let price = document.createElement("p");
  price.classList.add('card-price')
  price.innerText = item.price;

  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("data-id", item.id)
  link.classList.add('card-link')
  link.innerText = "Edit";
  link.addEventListener("click", function (a) {
    a.preventDefault();
    console.log("hi")
    updateHotelIdInput.value = item.id;
 
    updateHotelImageInput.value = item.image;
    updateHotelPriceInput.value = item.price
    updateHotelTitleInput.value = item.title
   

  })

  let btn = document.createElement("button");
  btn.classList.add('card-button')
  btn.innerText = "Delete";
  btn.setAttribute("data-id", item.id)

  btn.addEventListener("click", function () {
    fetch(`${bookURL}/${item.id}`, {
      method: "DELETE",

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchdata(bookURL)

      })
  })

  cardbody.append(cardtitle, price,cardauthor, link, btn);
  card.append(imgdiv, cardbody);
  return card
}


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
    body: JSON.stringify({newHotel}),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      fetchdata(bookURL)

    })
})

updateHotelBtn.addEventListener("click", updatebook);

function updatebook() {
  let updateBook = {
    title: updateHotelTitleInput.value,
    image: updateHotelImageInput.value,
    price: updateHotelPriceInput.value
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
      fetchdata(bookURL)
    })
}

searchByButton.addEventListener("click",function(){
  console.log("hi")
  fetchdata(`${bookURL}?_like=${searchByInput.value}`)
})
// searchByButton.addEventListener("click",function(){
//   console.log("hi")
//   fetchdata(`${bookURL}?${searchByInput.value}`)
// })

// newhotel div

let newHotelbtn = document.getElementById("newHotelBtn");
let updateHotelbtn = document.getElementById("updateHotelBtn");
let newHotel = document.getElementById("newHotel");
let updateHotel = document.getElementById("updateHotel1");

newHotelbtn.addEventListener("click",function(){
  newHotel.style.display="block"
  updateHotel.style.display="none"
})
updateHotelbtn.addEventListener("click",function(){
  newHotel.style.display="none"
  updateHotel.style.display="block"

})






