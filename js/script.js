// ---------------- Hamburger Menu --------------
// Add this to script.js or inside a <script> tag in your HTML
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});



//----------------- Slideshow -------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Automatic Slideshow
setInterval(() => plusSlides(1), 5000);


// --------------------- FAQ Toggle ---------------------

// FAQ toggle function
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Toggle the 'active' class
    this.classList.toggle("active");

    // Get the associated answer
    const answer = this.querySelector(".faq-answer");
    const toggleIcon = this.querySelector(".faq-toggle");

    // Toggle the display of the answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
      toggleIcon.textContent = "+";
    } else {
      answer.style.display = "block";
      toggleIcon.textContent = "-";
    }
  });
});

// -------------- Initialize EmailJS ---------------------
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID");
})();

// Handle Sell Gadget Forms submission
document
  .getElementById("sellLaptopForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

document
  .getElementById("sellTabletForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

document
  .getElementById("sellOtherDevicesForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

// Handle Contact Us form submission
// Initialize EmailJS
(function() {
    emailjs.init("pTDs-lKL96Apcs-So"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs
      .sendForm("service_htxxlys", "template_cazaa87", this) // Replace with your EmailJS service ID and template ID
      .then(
        function () {
          alert(
            "Thanks for reaching out! Your message has been sent successfully."
          );
        },
        function (error) {
          alert("Oops! Something went wrong, please try again.");
          console.log("Failed to send email:", error);
        }
      );
});
