var Sky = document.getElementById("Sky");
var button = document.getElementById("button");
var Sun = document.getElementById("Sun");

function onButtonClick() {
    Sun.classList.add("animation");
    Sky.classList.add("sky");
    button.style.display = "block";
    Sun.style.animationPlayState = "running";
    Sky.style.animationPlayState = "running";
    };

Sun.addEventListener("animationend", function () {

        Sky.classList.toggle("sky");
        Sun.classList.toggle("animation");
    
        button.style.display = "block";
        Sky.style.animationPlayState = "running";
        Sun.style.animationPlayState = "running";
    
    });

