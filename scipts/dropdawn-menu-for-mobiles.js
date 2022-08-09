const dropdawnMenu = document.getElementById("header-dropdawn-menu");
const showAndHideBtn = document.getElementById("show-and-hide-btn");
const menu = document.querySelector("#header-dropdawn-menu>ul");

if (window.innerWidth < 768) {
  dropdawnMenu.showModal();
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    dropdawnMenu.show();
  } else {
    dropdawnMenu.close();
  }
});

showAndHideBtn.addEventListener("click", () => {
  if (showAndHideBtn.checked) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
