const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Zatvori navigaciju" : "Otvori navigaciju");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Otvori navigaciju");
    });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Popuni sva polja prije slanja.";
      formMessage.style.color = "#a23c32";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formMessage.textContent = "Unesi email u ispravnom obliku.";
      formMessage.style.color = "#a23c32";
      return;
    }

    formMessage.textContent = `Hvala, ${name}! Forma je ispravno popunjena. Ovo je demonstracija — poruka nije poslana na email.`;
    formMessage.style.color = "#436b2d";
    contactForm.reset();
  });
}
