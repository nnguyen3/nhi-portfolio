console.log("animation loaded!");

const revealElements = document.querySelectorAll(
  "#about, #research article, #work .work-card, #education .education-item, #skills .skill-group, #contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});