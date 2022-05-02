// Mobile Menu
document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}
document.getElementById("close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}
// Aim us Tab
var aimUs = {
  "Mission": "Our goal is to not to waste paper and knowledge. The books that have been read cannot just simply stay in your bookcase, sell to us so that it can help others to afford knowledge.",
  "Vision": "To make knowlege affordable to everyone",
  "Values": "So many books,so little time"
};
var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";
var aimUsTabs = document.getElementsByClassName("single-tab");
for (var a = 0; a < aimUsTabs.length; a++) {
  aimUsTabs[a].onclick = function() {
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aimUs[clickedValue];
    for (var b = 0; b < aimUsTabs.length; b++) {
      aimUsTabs[b].style["background-color"] = unseletectedColor;
      aimUsTabs[b].style["font-weight"] = "normal";
    }
    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold";}}
