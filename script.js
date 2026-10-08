document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       PRINCIPLE TOGGLES
    ======================================== */
  
    const principleToggles = document.querySelectorAll(".principle-toggle");
  
    principleToggles.forEach((button) => {
  
      button.addEventListener("click", () => {
  
        const principle = button.closest(".principle");
        const caseStudy = principle.querySelector(".principle-case-study");
  
        const isOpen = button.getAttribute("aria-expanded") === "true";
  
        button.setAttribute("aria-expanded", String(!isOpen));
  
        caseStudy.classList.toggle("is-open", !isOpen);
  
      });
  
    });

    /* OFFERING TOGGLES */

document.querySelectorAll(".offering-toggle").forEach((button) => {
  button.onclick = function () {
    const content = this.parentElement.querySelector(".offering-content");

    if (content.style.display === "block") {
      content.style.display = "none";
      this.setAttribute("aria-expanded", "false");
    } else {
      content.style.display = "block";
      this.setAttribute("aria-expanded", "true");
    }
  };
});
  
  
    /* ========================================
       SMOOTH SCROLLING
    ======================================== */
  
    const navLinks = document.querySelectorAll('a[href^="#"]');
  
    navLinks.forEach((link) => {
  
      link.addEventListener("click", (event) => {
  
        const targetId = link.getAttribute("href");
  
        if (targetId === "#") return;
  
        const target = document.querySelector(targetId);
  
        if (!target) return;
  
        event.preventDefault();
  
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
  
      });
  
    });
  
  });