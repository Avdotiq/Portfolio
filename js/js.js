let cover = document.getElementById('close');
let btn = document.getElementById('close-btn');
let openPan = document.getElementById('open-btn');
let panel = document.getElementsByTagName('aside');
let body = document.getElementsByTagName('body');

window.onload = function() {
    
};

document.addEventListener( "DOMContentLoaded", function() {
    openPan.addEventListener("click", openPanel);
    btn.addEventListener("click", closePanel);
    cover.addEventListener("click", closePanel);
});

function openPanel() {
    body[0].classList.add("as-panel-open");
    cover.classList.remove("black-cover-content");
    cover.classList.add("show");
    panel[0].classList.add("aside");
}

function closePanel() {
    body[0].classList.remove("as-panel-open");
    panel[0].classList.remove("aside");
    panel[0].classList.add("aside-unshow");
    cover.classList.remove("show");
    cover.classList.add("unshow");
    timer();
}

function timer() {
    timerId = setTimeout(defoltClass, 790);
}

function defoltClass() {
    panel[0].classList.remove("aside-unshow");
    cover.classList.add("black-cover-content");
    cover.classList.remove("unshow");
}