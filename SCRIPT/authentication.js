const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");


/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);



//buttons
let sign_up = document.getElementById("signup_btn");
let log_in = document.getElementById("login_btn");
//signup inputs
let fullName = document.getElementById("fullName");
let set_user_email = document.getElementById("signup_email");
let set_user_password = document.getElementById("signup_password");
//login inputs
let get_user_email = document.getElementById("login_email");
let get_user_password = document.getElementById("login_password");
//get data
let user = JSON.parse(localStorage.getItem("user")) || [];

let user_status;
localStorage.setItem("status", false);

sign_up.addEventListener("click", (el) => {
  el.preventDefault();
  // console.log("yes")
  let obj =
  {
    fullName: fullName.value,
    email: set_user_email.value,
    password: set_user_password.value
  }
  user.push(obj);
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup Successfully");
})

log_in.addEventListener("click", (el) => {
  el.preventDefault();
  let flag = false;
  user.forEach((element) => {
    if (element.email === get_user_email.value && element.password === get_user_password.value) {
      flag = true;
    }
  })
  if (flag) {
    alert("Logged in successfully ")
    localStorage.setItem("status", true);
    window.location.href = "/cart.html";
  }
  else {
    alert("Email/Password wrong")
  }
})