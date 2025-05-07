// Replace with your own EmailJS public key, service ID, and template ID
emailjs.init("Fz0pXcFPz173-znY-"); // e.g. "xCzG123abcXYZ"

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Send email using EmailJS
  emailjs.sendForm("service_2upp0yi", "template_14snocw", this)
    .then(() => {
      showToast("Thanks for connecting!");

      // Clear form
      this.reset();
    }, (error) => {
      showToast("Failed to send. Please try again.");
      console.error("EmailJS error:", error);
    });
});

// Toast helper
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.add("opacity-0");
    setTimeout(() => {
      toast.classList.add("hidden");
      toast.classList.remove("opacity-0");
    }, 300);
  }, 3000);
}
