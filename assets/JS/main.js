const $ = document;

// Attendre que le DOM ait chargé

$.addEventListener("DOMContentLoaded", () => {
  console.log("Le document a fini de charger");
  // Ajouter un écouteur d'évenement sur le bouton
  const myButton = $.querySelector(".button-show-text");
  const paragraph = $.querySelector("#paragraph");
  //   console.log(myButton);
  myButton.addEventListener("click", () => {
    // console.log("J'ai cliqué sur mon bouton");

    // console.log(paragraph.classList);
    paragraph.classList.add("show");
  });

  $.querySelector(".button-hide-text").addEventListener("click", () => {
    paragraph.classList.remove("show");
  });

  $.querySelector("#toggle-button").addEventListener("click", () => {
    paragraph.classList.toggle("show");
  });

  $.querySelector("#formulaire").addEventListener("submit", async (event) => {
    // console.log(event);
    event.preventDefault();
    const response = await axios.post(
      "https://site--cassiopeia24-backend-mailgun--5ytnmfswy69s.code.run/send-email",
      {
        firstname: $.querySelector("#firstname").value,
        lastname: $.querySelector("#lastname").value,
        email: $.querySelector("#email").value,
        message: $.querySelector("#message").value,
        subject: $.querySelector("#subject").value,
      }
    );
    console.log(response.data);
    alert("Message envoyé");
  });
});
