const btnMobile = document.getElementById("btn-mobile");
function toogleMenu(t) {
  "touchstart" === t.type && t.preventDefault();
  const e = document.getElementById("nav");
  e.classList.toggle("active");
  var n = e.classList.contains("active");
  t.currentTarget.setAttribute("aria-expanded", n),
    n
      ? t.currentTarget.setAttribute("aria-label", "Fechar menu")
      : t.currentTarget.setAttribute("aria-label", "Abrir menu");
}
btnMobile.addEventListener("click", toogleMenu),
  btnMobile.addEventListener("touchstart", toogleMenu);
