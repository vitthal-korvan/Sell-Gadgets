// Initialize EmailJS
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
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

// Function to send form via EmailJS
function sendForm(form) {
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form).then(
    function () {
      alert("Thanks for sharing details. We will get back to you soon.");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
