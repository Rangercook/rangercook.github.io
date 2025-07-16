document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Replace this with actual backend/email forwarding later
  document.getElementById("formStatus").innerText = "Thanks, " + name + "! Your request has been submitted.";

  // Optionally send to your email using Formspree or Zapier in future
});
