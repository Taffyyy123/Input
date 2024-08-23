const Email = document.getElementById("Email");
Email.innerHTML = "Email";
const Password = document.getElementById("Password");
const phonenumber = document.getElementById("Number");
const button = document.getElementById("button");
const too = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

let result = 0;

function isValidEmail() {
  const email = Email.value;
  if (email.includes("@") === false) {
    alert("@ bhgu bn");
  } else {
    result += 1;
  }
}

function isValidPhoneNumber() {
  const number = phonenumber.value;
  if (number.length < 8) {
    alert("8 oron hurehgu bn");
  } else {
    result += 1;
  }
  for (let i = 0; i < number.length; i++) {
    if (number.includes(alphabet[i])) {
      alert("invalid phone number");
      result = 0;
      break;
    }
  }
}
function isValidPassword() {
  const password = Password.value;
  if (password.length < 8) {
    alert("too_short");
    result = 0;
  } else if (password.search(/\d/) == -1) {
    alert("nothing number");
    result = 0;
  } else if (password.search(/[a-zA-Z]/) == -1) {
    alert("nothing letter");
    result = 0;
  } else {
    result += 1;
  }
}
button.addEventListener("click", function () {
  isValidEmail();
  isValidPhoneNumber();
  isValidPassword();
  if (result >= 3) {
    result = 0;
    window.location.href = "./todo.html";
  } else {
    result = 0;
  }
});
