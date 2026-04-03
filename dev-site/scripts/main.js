const titulo = document.getElementById("titulo");
const paragrafo = document.getElementById("paragrafo");
const botao = document.createElement("button");

//HEADER
const header = document.querySelector("header");
header.appendChild(botao);

//BOTAO
botao.textContent = "WhatsApp";
botao.style.fontSize = "1rem";
botao.style.fontWeight = "bold";
botao.style.color = "white";
botao.style.background = "green"
botao.style.border = "none";
botao.style.borderRadius = "2rem"
botao.style.padding = "1.5rem";
botao.style.marginLeft = "2rem";
botao.style.cursor = "pointer";

//EVENTO DO BOTAO
botao.addEventListener("click", function() {
    // document.location.href. = "https://wa.me/556199999999"
    window.open("https://wa.me/5545999999999", "_blank")
})
