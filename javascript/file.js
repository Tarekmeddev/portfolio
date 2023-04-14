// header fixed
let myHeader = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    myHeader.classList.add("active");
  } else {
    myHeader.classList.remove("active");
  }
});
// menu toggle
let myBtn = document.querySelector(".bars");
let myNav = document.querySelector("ul.navbar");
myBtn.onclick = () => {
  myNav.classList.toggle("active");
  myBtn.firstElementChild.classList.toggle("active");
  myBtn.lastElementChild.classList.toggle("active");
  console.log();
};
// to top button
let up = document.querySelector(".up");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (this.scrollY >= 400) {
    up.style.cssText = "display:flex";
  } else {
    up.style.cssText = "display:none";
  }
});
up.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
