const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".nav-toggle");
const page = document.body.dataset.page;
const navAlias = { thaayu: "products", wendo: "products", faqs: "contact" };
const current = navAlias[page] || page;

nav?.querySelectorAll("a[data-nav]").forEach((link) => {
  link.classList.toggle("is-active", link.dataset.nav === current);
});

function setMenu(open) {
  nav?.classList.toggle("is-open", open);
  document.documentElement.classList.toggle("nav-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle?.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 901px)").matches) setMenu(false);
});

const form = document.querySelector(".contact-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const subject = encodeURIComponent(`SHAMBA enquiry from ${name || "the website"}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:shamba@shamba.com?subject=${subject}&body=${body}`;
});
