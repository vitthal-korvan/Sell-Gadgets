// ---------------- Hamburger Menu --------------
 function toggleMenu() {
   document.getElementById("mobileMenu").classList.toggle("open");
 }

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
setInterval(() => plusSlides(1), 4000);


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

