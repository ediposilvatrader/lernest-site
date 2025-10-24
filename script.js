// Simple utilities for the landing
document.getElementById("year").textContent = new Date().getFullYear();

function joinWaitlist(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) return false;

  // OPTION A (rápida): mailto fallback
  const subject = encodeURIComponent("Quero entrar na beta do Learnast");
  const body = encodeURIComponent(`Olá, quero participar da beta. Meu e-mail é: ${email}`);
  window.location.href = `mailto:contato@learnaste.com.br?subject=${subject}&body=${body}`;

  // OPTION B (recomendada depois): usar Formspree/Getform etc.
  // Trocar form action para o endpoint do serviço e remover este JS.

  // Feedback simples
  setTimeout(() => alert("Abrimos seu e-mail padrão para enviar a solicitação. Se preferir, escreva para contato@learnaste.com.br"), 800);
  return false;
}
