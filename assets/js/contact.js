/*---=== EMAIL JS ===---*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_c2yga05",
      "template_8xbf4hx",
      "#contact-form",
      "XY1gU1cAbBHTK_Grp"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "mensagem enviada com sucesso ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent =
          "Mensagem não enviada (erro de servidor) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
