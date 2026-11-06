const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const progress = document.querySelector("#scroll-progress");
const year = document.querySelector("#year");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];

if ("IntersectionObserver" in window && navLinks.length) {
  const linkMap = new Map(
    navLinks.map((link) => [link.getAttribute("href").slice(1), link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.remove("is-active"));
        const active = linkMap.get(entry.target.id);
        if (active) active.classList.add("is-active");
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const updateProgress = () => {
  if (!progress) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.width = Math.min(100, Math.max(0, ratio * 100)) + "%";
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();



/* PAGE TRANSITION / SECTION STATE */
const pageSections = [...document.querySelectorAll("main > section")];

if ("IntersectionObserver" in window && pageSections.length) {
  const pageObserver = new IntersectionObserver(
    (entries) => {
      const center = window.innerHeight / 2;
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const distanceA = Math.abs(
            (a.boundingClientRect.top + a.boundingClientRect.bottom) / 2 - center
          );
          const distanceB = Math.abs(
            (b.boundingClientRect.top + b.boundingClientRect.bottom) / 2 - center
          );
          return distanceA - distanceB;
        })[0];

      if (!activeEntry) return;

      pageSections.forEach((section) => {
        section.classList.toggle("is-page-active", section === activeEntry.target);
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0
    }
  );

  pageSections.forEach((section) => pageObserver.observe(section));
} else {
  pageSections.forEach((section) => section.classList.add("is-page-active"));
}
