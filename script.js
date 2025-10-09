const text = "Sobre Mim";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("titulo").textContent += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}

type();


const text = "Portfólio";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("titulo").textContent += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}

type();
// ====== Efeito de digitação no título ======
const text = "Formação";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("titulo").textContent += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}

type();

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Contato");
  
  form.addEventListener("submit", () => {
    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato, Vitor responderá em breve.");
  });
});

