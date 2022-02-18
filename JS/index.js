let spanElt = document.querySelector(".timer span");
let timer = 0;

setInterval(function() {
    timer++;
    spanElt.textContent = timer
}, 1000);

let spanElt = document.querySelector(".timer span");
let timer = 30;

let timer_id = setInterval(function() {
timer--;
spanElt.textContent = timer;
if (timer < 1) {
clearInterval(timer_id);
}
}, 1000);
