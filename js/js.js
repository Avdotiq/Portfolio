var cover = document.getElementById('close');
var btn = document.getElementById('close-btn');
var openPan = document.getElementById('open-btn');
var panel = document.getElementsByTagName("aside");

window.onload = function() {
    
};

document.addEventListener( "DOMContentLoaded", function() {
    openPan.addEventListener("click", openPanel);
    btn.addEventListener("click", closePanel);
    cover.addEventListener("click", closePanel);
});

function openPanel() {
    cover.classList.remove("black-cover-content");
    cover.classList.add("show");
    panel[0].classList.add("aside");
}

function closePanel() {
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