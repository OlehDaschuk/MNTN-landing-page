const navigation = document.querySelectorAll(".page-navigation>li");

const start = document.getElementById("start");
const firstSection = document.getElementById("1");
const secondSection = document.getElementById("2");
const thirdSection = document.getElementById("3");

window.addEventListener("scroll", () => {
  navigation.forEach((li) => {
    if (li.classList.contains("nav-active")) li.classList.remove("nav-active");
  });

  if (firstSection.getClientRects()[0].y - 100 > 0) {
    navigation[0].classList.add("nav-active");
  } else if (secondSection.getClientRects()[0].y - 100 > 0) {
    navigation[1].classList.add("nav-active");
  } else if (thirdSection.getClientRects()[0].y - 100 > 0) {
    navigation[2].classList.add("nav-active");
  } else {
    navigation[3].classList.add("nav-active");
  }
});
