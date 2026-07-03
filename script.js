const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = () => {
  let activeId = "top";

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140) activeId = section.id || "top";
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
