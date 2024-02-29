//Nav toggle js

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});




// typing effect js 
var typingEffect = new Typed(".typedText",{
    strings: ["Designer","Web Developer"],
    loop:true,typeSpeed:100,backSpeed:80,backDelay:2000
})


// tabs swithing js 
const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeHeading.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};

//valdation form js (will work after connecting DB)

function validateForm() {
  var name = document.getElementById('name').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var isValid = true;

  // Reset error messages
  document.getElementById('nameError').innerText = "";
  document.getElementById('phoneError').innerText = "";
  document.getElementById('emailError').innerText = "";
  document.getElementById('messageError').innerText = "";

  // Name validation
  if (name === "") {
    document.getElementById('nameError').innerText = "Name is required";
    isValid = false;
  }

  // Phone validation (for demonstration purposes, let's assume phone number is required)
  if (phone === "") {
    document.getElementById('phoneError').innerText = "Phone number is required";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    document.getElementById('emailError').innerText = "Email is required";
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').innerText = "Please enter a valid email address";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById('messageError').innerText = "Message is required";
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  // Very basic email validation, you can use a more comprehensive regex for real applications
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}


  