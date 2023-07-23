
// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
//   }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `https://globe-walker-bjxi.onrender.com/hotels`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let hotelTitleInput = document.getElementById("hotel-title");
let hotelImageInput = document.getElementById("hotel-image");
let hotelRatingInput = document.getElementById("hotel-rating");
// let bookAuthorInput = document.getElementById("book-author");
let hotelPriceInput = document.getElementById("hotel-price");
let hotelCreateBtn = document.getElementById("add-hotel");

// Update book
let updateHotelIdInput = document.getElementById("hotel-id");
let updateHotelTitleInput = document.getElementById("update-hotel-title");
let updateHotelImageInput = document.getElementById("update-hotel-image");

let updateHotelRatingrInput = document.getElementById("update-book-author");
// let updateBookCategoryInput = document.getElementById("update-book-category");
let updateHotelPriceInput = document.getElementById("update-hotel-price");
let updateHotelBtn = document.getElementById("update-hotel");

//Update price
// let updatePriceBookId = document.getElementById("update-price-book-id");
// let updatePriceBookPrice = document.getElementById("update-price-book-price");
// let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
// let sortAtoZBtn = document.getElementById("sort-low-to-high");
// let sortZtoABtn = document.getElementById("sort-high-to-low");
// let filterClassic = document.getElementById("filter-Classic");
// let filterFantasy = document.getElementById("filter-Fantasy");
// let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");

//Books Data
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
  img.setAttribute("alt", "Hotel");
  imgdiv.append(img);

  let cardbody = document.createElement("div")
  cardbody.classList.add("card-body");

  let cardtitle = document.createElement("h4");
  cardtitle.classList.add('card-title')
  cardtitle.innerText = item.title;

  let cardauthor = document.createElement("p");
  cardauthor.classList.add('card-author')
  cardauthor.innerText = item.rating;

  // let cardcategory = document.createElement("p");
  // cardcategory.classList.add('card-category')
  // cardcategory.innerText = item.category;

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
    // updateHotelAuthorInput.value = item.author;
    // updateBookCategoryInput.value = item.category;
    updateHotelImageInput.value = item.image;
    updateHotelPriceInput.value = item.price
    updateHotelTitleInput.value = item.title
    // updatePriceBookId.value=item.id;
    // updatePriceBookPrice.value=item.price

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
        // .catch(err=>{console.log(err)})

      })
  })

  // cardbody.append(cardtitle, price,cardauthor, link);
  card.append(imgdiv, cardbody);
  return card
}


hotelCreateBtn.addEventListener("click", function () {
  console.log("hi")
  // let newBook = 

  fetch(bookURL, {
    method: "POST",
    body: JSON.stringify({
      title: hotelTitleInput.value,
      rating: hotelRatingInput.value,
      // category: bookCategoryInput.value,
      image: hotelImageInput.value,
      price: hotelPriceInput.value
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      fetchdata(bookURL)
      // .catch(err=>{console.log(err)})

    })
})

updateHotelBtn.addEventListener("click", updatebook);

function updatebook() {
  let updateBook = {
    title: updateHotelTitleInput.value,
    // author: updateHotelAuthorInput.value,
    // category: updateBookCategoryInput.value,
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

// updatePriceBookPriceButton.addEventListener("click", updateBookprice);

// function updateBookprice() {
//   let updateprice = {
//     price: updatePriceBookPrice.value
//   }
//   fetch(`${baseServerURL}/books/${updateBookIdInput.value}`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(updateprice)
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       fetchdata(bookURL)
//     })
// }


// sortAtoZBtn.addEventListener("click",function(){
//   fetchdata(`${bookURL}?_sort=price&_order=asc`)
// })
// sortZtoABtn.addEventListener("click",function(){
//   fetchdata(`${bookURL}?_sort=price&_order=desc`)
// })
// filterClassic.addEventListener("click",function(){
//   fetchdata(`${bookURL}?category=Classic`)
// })
// filterFantasy.addEventListener("click",function(){
//   fetchdata(`${bookURL}?category=Fantasy`)
// })
// filterMystery.addEventListener("click",function(){
//   fetchdata(`${bookURL}?category=Mystery`)
// })
// searchByButton.addEventListener("click",function(){
//   console.log("hi")
//   fetchdata(`${bookURL}?${searchBySelect.value}_like=${searchByInput.value}`)
// })