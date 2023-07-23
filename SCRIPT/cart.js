let container = document.getElementById("container");

//selectors for div above navBar
let twitter = document.querySelector(".twitterImg");
let facebook = document.querySelector(".facebookImg");
let linkedIn = document.querySelector(".linkedInImg");
let insta = document.querySelector(".instaImg");
let youTube = document.querySelector(".youTubeImg");
let login_signup = document.getElementById("login_signup");

let go_to_payment = document.getElementById("enquiryBtn");

//code for div Above navBar
twitter.addEventListener("click", () => {
  window.open("https://twitter.com/");
});
facebook.addEventListener("click", () => {
  window.open("https://facebook.com/");
});
linkedIn.addEventListener("click", () => {
  window.open("https://in.linkedin.com/");
});
insta.addEventListener("click", () => {
  window.open("https://www.instagram.com/");
});
youTube.addEventListener("click", () => {
  window.open("https://www.youtube.com/");
});

// storing data to LS 
let hotelArr = JSON.parse(localStorage.getItem("cartData")) || [];
let paymentArr = JSON.parse(localStorage.getItem("paymentData")) || [];

//Moe Info selectores
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let moreInfo_Sliding_Image = document.querySelector(".moreInfo_Sliding_Image");
let LcoationDescription = document.querySelector(".LcoationDescription");
let LcoationDescriptionDiv = document.querySelector(".LcoationDescriptionDiv");
let MoreInfoCloseBtn = document.querySelector(".close");
let status = JSON.parse(localStorage.getItem("status"));


if (status) {

  login_signup.innerText = "log-out";
  displayHotelPlaces(hotelArr)
  calculate()
  go_to_payment.addEventListener("click",()=>{
    let gt = totalvalue.innerText
    localStorage.setItem("GT",JSON.stringify(gt));
    window.location.href= "/payment.html";
  })
  function displayHotelPlaces(data) {
    // console.log(data)
    container.innerHTML = null

    for (let i = 0; i < data.length; i++) {

      let card = document.createElement("div");
      let image = document.createElement("img");

      let price = document.createElement("h4");
      let location = document.createElement("h3");
      let card2 = document.createElement("div");
      let rating = document.createElement("h4");
      let stars = document.createElement("div");
      let enquiry = document.createElement("button");
      let addCartBtn = document.createElement("button");
      let country = document.createElement("h3");
      country.innerText = data[i].country;
      //  adding card to ls and later will append to cart page
      addCartBtn.addEventListener("click", function () {
        data[i].quantity = 1;
        paymentArr.push(data[i])
        localStorage.setItem("paymentData", JSON.stringify(paymentArr))
        alert("Package added to Payment Page")
        window.location.href = "./payment.html"
      })

      let card4 = document.createElement("div");
      card4.setAttribute("class", "enquiry_ToCartDiv");


      price.innerText = "₹ " + data[i].price + "/Head";
      price.setAttribute("class", "price");

      image.src = data[i].image;
      if (data[i].title == undefined) {
        location.innerText = data[i].location + "," + data[i].country;
      }
      else {
        location.innerText = data[i].title;

      }

      location.setAttribute("class", "location");
      rating.innerText = data[i].rating;
      for (let j = 1; j <= 5; j++) {
        let span = document.createElement("span");
        if (j <= Number(data[i].rating)) {
          span.setAttribute("class", "fa fa-star checked");
        }
        else {
          span.setAttribute("class", "fa fa-star");
        }
        stars.append(span);
      }

      enquiry.innerText = "DELETE";
      enquiry.setAttribute("class", "enquiryBtn");

      addCartBtn.innerText = "BUY NOW";
      addCartBtn.setAttribute("class", "addCartBtn");

      card2.append(rating, stars);
      card4.append(enquiry);
      card2.id = "rating";
      card.append(image, card2, location, price, card4);
      container.append(card);


      enquiry.addEventListener("click", function () {
        console.log("hi")
        hotelArr = hotelArr.filter(function (el) {
          return el.id != data[i].id
        })

        localStorage.setItem("cartData", JSON.stringify(hotelArr))
        displayHotelPlaces(hotelArr)
        calculate()

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
  function ArrowFunc(array, i) {
    leftArrow.addEventListener("click", () => {

      if (i > 0) {
        i--;
      }
      else if (i == 0) {
        i = array.length - 1;
      }
      moreInfo_Sliding_Image.src = array[i];
    })

    rightArrow.addEventListener("click", () => {

      if (i < array.length - 1) {
        i++;
      }
      else if (i == array.length - 1) {
        i = 0;
      }
      moreInfo_Sliding_Image.src = array[i];
    })
  }


  MoreInfoCloseBtn.addEventListener("click", () => {
    moreInfo_closeForm();
  })

  if (container.innerHTML == "") {
  }
  // functions for enquiry form
  function enquiry_openForm() {

    document.getElementById("my_enquiry-form").style.display = "block";

  }

  function enquiry_closeForm() {
    document.getElementById("my_enquiry-form").style.display = "none";
  }
  // cart total

  function calculate() {
    let tota_value = 0;

    hotelArr.forEach((el) => {

      tota_value += el.price * el.quantity;
    })
    if (hotelArr.length > 0) {
      totalvalue.innerText = tota_value;
    }
    else {
      total.innerText = null;
      let div = document.createElement("div");
      let image = document.createElement("img");
      let h2 = document.createElement("h2");
      let h4 = document.createElement("h4");

      h2.innerText = "Cart is empty"
      h4.innerText = "Your cart is currently empty. Start shopping now to fill it with amazing items!"
      image.setAttribute("src", "./IMAGES/logo.png");
      div.append(image, h2, h4);
      empty_container.append(div)

    }
  }

}
else {
  alert("Please log-in first")
  login_signup.innerText = "log-in";
}