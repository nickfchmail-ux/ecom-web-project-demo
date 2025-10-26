console.log("The script is running!");

let nextButton = document.getElementById("btn-next");
let prevButton = document.getElementById("btn-prev");
let backButton = document.getElementById("btn-back");
let seeMoreButton = document.querySelectorAll(".btn-seeMore");
let carousel = document.querySelector(".carousel");

nextButton.onclick = function () {
  console.log("click");
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};

const showSlider = (type) => {
  carousel.classList.remove("prev", "next");
  let items = document.querySelectorAll(".carousel__item");
  let arrow = document.querySelector(".arrow");

  arrow.parentNode.removeChild(arrow);
  carousel.appendChild(arrow);
  if (type === "next") {
    carousel.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    let positionLast = items.length - 1;
    carousel.prepend(items[positionLast]);
    carousel.classList.add("prev");
  }
};

seeMoreButton.forEach((button) => {
  button.onclick = function () {
    console.log("clicked see-more button");
    carousel.classList.add("showDetail");
  };
});

backButton.onclick = function () {
  console.log("back btn was clicked");
  carousel.classList.remove("showDetail");
};
