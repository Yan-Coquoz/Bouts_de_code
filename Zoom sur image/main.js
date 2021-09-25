import Drift from "drift-zoom";
// le loader fourni de drift avec effet
import "drift-zoom/dist/drift-basic.min.css";
import "./style.css";

const imgTrigger = document.body.querySelector("#imag");
const pane = document.body.querySelector("#imgDetails");

const drift = new Drift(imgTrigger, {
  paneContainer: pane,
});

console.log(drift);
