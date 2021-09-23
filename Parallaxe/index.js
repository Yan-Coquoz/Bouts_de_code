const myParallax = document.querySelector(".container2");

window.addEventListener("scroll", () => {
  middle();
  console.log("haut de l'ecran ", window.scrollY);
  myParallax.style.backgroundPositionY = -window.scrollY / 1.2 + "px";
});

function middle() {
  // trouve le milieu de l'ecran
  const screenY = window.scrollY + window.innerHeight / 2;
  console.log("screenY ", screenY);
}

// function offsetTop(element, acc) {
//   if (element.offsetParent) {
//     return offsetTop(element.offsetParent, acc + element.offsetTop);
//   }
//   return acc + element.offsetTop;
// }
