const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("invalid");
  message.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!EMAIL_PATTERN.test(email)) {
    emailInput.classList.add("invalid");
    showMessage("Inserisci un indirizzo email valido.", "error");
    return;
  }

  // TODO: collegare a un servizio newsletter (es. Mailchimp, Brevo, Formspree)
  form.reset();
  showMessage("Grazie! Ti avviseremo appena saremo online.", "success");
});
