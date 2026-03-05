// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.style.display === "flex";
    nav.style.display = open ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.gap = "12px";
    nav.style.position = "absolute";
    nav.style.right = "4vw";
    nav.style.top = "70px";
    nav.style.padding = "14px";
    nav.style.background = "rgba(11,18,32,.95)";
    nav.style.border = "1px solid rgba(255,255,255,.12)";
    nav.style.borderRadius = "16px";
    nav.style.boxShadow = "0 20px 60px rgba(0,0,0,.55)";
    toggle.setAttribute("aria-expanded", String(!open));
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());

// "Forms" -> open email compose (no backend)
function openMailFromForm(form) {
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const location = (data.get("location") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const subject = encodeURIComponent("Upit — Toner Osijek");
  const lines = [
    `Ime: ${name}`,
    `Telefon: ${phone}`,
    location ? `Lokacija: ${location}` : null,
    "",
    "Poruka:",
    message
  ].filter(Boolean);

  const body = encodeURIComponent(lines.join("\n"));
  // TODO: ubaci službeni email kad ga budeš imao
  const to = encodeURIComponent("josip.toner@gmail.com");

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    openMailFromForm(leadForm);
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    openMailFromForm(contactForm);
  });
}