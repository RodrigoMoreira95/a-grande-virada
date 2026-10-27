(function () {
  document.documentElement.classList.add("js");

  // Contagem regressiva: 27 de outubro de 2026, 20h (horário de Brasília)
  var alvo = new Date("2026-10-27T20:00:00-03:00").getTime();
  var box = document.getElementById("countdown");
  var grid = document.getElementById("countdown-grid");
  var label = document.getElementById("countdown-label");
  var cd = {
    d: document.getElementById("cd-d"),
    h: document.getElementById("cd-h"),
    m: document.getElementById("cd-m"),
    s: document.getElementById("cd-s")
  };
  var timer;

  function dois(n) { return n < 10 ? "0" + n : String(n); }

  function atualizar() {
    var resto = alvo - Date.now();
    if (resto <= 0) {
      grid.hidden = true;
      label.textContent = "O evento já começou!";
      clearInterval(timer);
      return;
    }
    var s = Math.floor(resto / 1000);
    cd.d.textContent = dois(Math.floor(s / 86400));
    cd.h.textContent = dois(Math.floor((s % 86400) / 3600));
    cd.m.textContent = dois(Math.floor((s % 3600) / 60));
    cd.s.textContent = dois(s % 60);
  }

  if (box) {
    box.hidden = false;
    atualizar();
    timer = setInterval(atualizar, 1000);
  }

  if (!("IntersectionObserver" in window)) return;

  // Botão fixo no celular: aparece depois do botão principal e some no rodapé
  var sticky = document.getElementById("sticky-cta");
  var principal = document.getElementById("cta-principal");
  var rodape = document.querySelector(".footer");
  var passouHero = false;
  var noRodape = false;

  function atualizarSticky() {
    var mostrar = passouHero && !noRodape;
    sticky.classList.toggle("is-visible", mostrar);
    sticky.setAttribute("aria-hidden", mostrar ? "false" : "true");
    sticky.tabIndex = mostrar ? 0 : -1;
  }

  if (sticky && principal) {
    new IntersectionObserver(function (e) {
      passouHero = !e[0].isIntersecting && e[0].boundingClientRect.top < 0;
      atualizarSticky();
    }).observe(principal);
  }
  if (sticky && rodape) {
    new IntersectionObserver(function (e) {
      noRodape = e[0].isIntersecting;
      atualizarSticky();
    }).observe(rodape);
  }

  // Aparecer suavemente ao rolar (sem JS, tudo fica visível)
  var alvos = document.querySelectorAll(
    ".kicker, .reveal__title, .reveal__img, .card, .condition, .condition__text, .reveal__inner .btn"
  );
  var io = new IntersectionObserver(function (itens) {
    itens.forEach(function (i) {
      if (i.isIntersecting) {
        i.target.classList.add("is-in");
        io.unobserve(i.target);
      }
    });
  }, { threshold: 0.15 });
  alvos.forEach(function (el) { el.classList.add("fade"); io.observe(el); });
})();
