document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("response").textContent = "Thank you for contacting us! We'll get back to you shortly.";
  this.reset();
});
