let spanElt = document.querySelector(".timer span");
let timer = 0;

setInterval(function() {
    timer++;
    spanElt.textContent = timer
}, 1000);