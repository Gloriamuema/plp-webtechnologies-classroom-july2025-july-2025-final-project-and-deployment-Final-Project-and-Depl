// Toggle mobile menu
const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("animate__fadeInDown");
  });
}

// Learn More button interaction
const learnBtn = document.getElementById("learnMore");
if (learnBtn) {
  learnBtn.addEventListener("click", () => {
    learnBtn.classList.add("animate__bounce");
    setTimeout(() => {
      learnBtn.classList.remove("animate__bounce");
      window.location.href = "about.html";
    }, 800);
  });
}
