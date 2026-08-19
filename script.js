const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".nav-toggle");
const cartCount = document.querySelector(".cart-count");
const cartButton = document.querySelector(".cart");

let count = 0;

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.querySelectorAll("a").forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".shop").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = String(count);
    cartButton?.setAttribute("aria-label", `Shopping bag, ${count} items`);
  });
});
