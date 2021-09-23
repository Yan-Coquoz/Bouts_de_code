const btnTop = document.querySelector(".top-btn");

window.addEventListener("scroll", checkTop);

function checkTop() {
  if (window.scrollY > 150) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
}

btnTop.addEventListener("click", () => {
  // console.log("clic");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
