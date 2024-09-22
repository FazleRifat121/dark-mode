const day = document.querySelector('.day');

const night = document.querySelector(".night");

day.addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});
night.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});