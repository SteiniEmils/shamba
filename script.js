const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".nav-toggle");
const page = document.body.dataset.page;
const navAlias = { thaayu: "products", wendo: "products", faqs: "contact" };
const current = navAlias[page] || page;

nav?.querySelectorAll("a[data-nav]").forEach((link) => {
  link.classList.toggle("is-active", link.dataset.nav === current);
});

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
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
