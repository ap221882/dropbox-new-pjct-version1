const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("nav-btn");
const cross = document.getElementById("nav-btn-cross");

navBtn.addEventListener("click", () => {
  // navbar.classList.add("show-nav");
  navbar.style.display = "block";
  cross.style.display = "inline-block";
  navBtn.style.display = "none";
});

cross.addEventListener("click", () => {
  // navbar.classList.remove("show-nav");
  navbar.style.display = "none";
  navBtn.style.display = "inline-block";
  cross.style.display = "none";
});
