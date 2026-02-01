

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
const elementosParaAnimar = document.querySelectorAll('a, p, h1, h2, h3,.logo-slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

elementosParaAnimar.forEach((el) => {
  // 2. O JS adiciona a classe CSS 'reveal' automaticamente a todos
  el.classList.add('reveal');
  observer.observe(el);
});







