const day = document.querySelector(".day");

const night = document.querySelector(".night");

day.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  night.style.visibility = "visible";
  day.style.visibility = "hidden";
});
night.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  night.style.visibility = "hidden";
  day.style.visibility = "visible";
});
