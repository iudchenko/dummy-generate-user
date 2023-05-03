const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhone = document.getElementById("user-phone");
const userLocation = document.getElementById("user-location");
const userAge = document.getElementById("user-age");
const userPicture = document.getElementById("user-picture");
const spinner = document.getElementById("spinner");
const generageBtn = document.getElementById("generate");

function fetchUser() {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => updateUser(data.results[0]))
    .catch((err) => console.log(err))
    .finally(() => hideSpinner());
}

function showSpinner() {
  spinner.classList.remove("hidden");
}

function hideSpinner() {
  spinner.classList.add("hidden");
}

function updateUser(user) {
  // console.log(user);
  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }
  userName.textContent = `${user.name.first} ${user.name.last}`;
  userEmail.textContent = user.email;
  userPhone.textContent = user.phone;
  userLocation.textContent = user.location.city;
  userAge.textContent = user.dob.age;
  userPicture.src = user.picture.large;
}

window.addEventListener("DOMContentLoaded", fetchUser);
generageBtn.addEventListener("click", fetchUser);
