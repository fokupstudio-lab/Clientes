

// Primeira cópia
// 1. PRIMEIRO: Criamos as cópias (para elas existirem no HTML)
const logosContainer = document.querySelector(".logos");
const originalSlide = document.querySelector(".logo-slide");

if (logosContainer && originalSlide) {
  const copy1 = originalSlide.cloneNode(true);
  logosContainer.appendChild(copy1);

  const copy2 = originalSlide.cloneNode(true);
  logosContainer.appendChild(copy2);
}

// 2. DEPOIS: Aplicamos o efeito de revelar (já vai incluir as cópias)
// 1. Selecionamos automaticamente todas as secções e artigos
// ... (teu código de clonagem de logos continua igual no topo)
const elementosParaAnimar = document.querySelectorAll(' p, h1, h2, h3, .revela, button, .nav-dots, section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Quando entra no ecrã (a descer ou a subir)
      entry.target.classList.add('active');
    } else {
      // ESTA É A NOVIDADE: Quando sai do ecrã, removemos a classe
      // Assim, ele estará pronto para "revelar" novamente
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.1, // Dispara quando 10% do elemento está visível
  rootMargin: "0px 0px -50px 0px" // Pequena margem para o efeito ser mais natural
});

elementosParaAnimar.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});







