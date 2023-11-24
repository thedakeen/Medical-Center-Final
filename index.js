// animation methods

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}

//

const cards = document.querySelectorAll(".card-index");
const audio = new Audio("sounds/card_hover.wav");
cards.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    element.style.scale = 1.1;
    element.style.backgroundColor = "#FFB15F";
    audio.play();
  });
  element.addEventListener("mouseleave", function () {
    element.style.backgroundColor = "white";
    element.style.scale = 1;
    audio.pause();
    audio.currentTime = 0;
  });
});

//scroll button

const goTopBtn = document.getElementById("go-top");

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

// form
function validateEmail(email) {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const errorElement = document.getElementById("error-message");

  if (name === "" || email === "" || subject === "" || message === "") {
    errorElement.innerHTML = "Please fill all fields";
    return false;
  } else if (!validateEmail(email)) {
    errorElement.innerHTML = "Email is incorrect";
  } else {
    errorElement.innerHTML = "";
    showSuccessMessage();
    return true;
  }
}

function showSuccessMessage() {
  const successElement = document.getElementById("success-message");
  successElement.innerHTML = "Thanks for your feedback!";
}

// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();});
