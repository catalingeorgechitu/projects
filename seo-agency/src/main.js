const burger = document.getElementsByClassName("nav-burger")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

burger.addEventListener("click", () => {
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
  } else {
    navLinks.classList.add("hidden");
  }
});
