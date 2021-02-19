var slides = document.getElementsByClassName('item');
var dots = document.getElementsByClassName('slider-dots-item');
var numbSlide = 0;
interval();

document.addEventListener( "DOMContentLoaded", function() {
    btn = document.getElementsByClassName("btn");
    for (i=0; i < btn.length; i++) { 
        btn[i].addEventListener("click", slide);
        console.log(btn);
	}
});

function interval() {
    interId = setInterval(nextSlide, 4000);
}

function slide() {
    clearInterval(interId);
    btnClick = event.currentTarget;
    btnClass = btnClick.classList[1];
    if (btnClass == "btn-left") {
        lastSlide();
        interval();
    }
    if (btnClass == "btn-right") {
        nextSlide();
        interval();
    }
}

function goToSlide(n) {
    slides[numbSlide].classList.remove("backShowing");
    slides[numbSlide].classList.remove("showing");
    dots[numbSlide].classList.remove("active-slide-dots");
    slides[numbSlide].classList.add("unShowing");
    timerSlide();
    console.log(numbSlide);
    numbSlide = (n+slides.length)%slides.length;
    console.log(numbSlide);
    slides[numbSlide].classList.add("showing");
    dots[numbSlide].classList.add("active-slide-dots");
}

function backToSlide(n) {
    slides[numbSlide].classList.remove("backShowing");
    slides[numbSlide].classList.remove("showing");
    dots[numbSlide].classList.remove("active-slide-dots");
    slides[numbSlide].classList.add("back");
    timerSlideback();
    console.log(numbSlide);
    numbSlide = (n+slides.length)%slides.length;
    console.log(numbSlide);
    slides[numbSlide].classList.add("backShowing");
    dots[numbSlide].classList.add("active-slide-dots");
}

function nextSlide() {
    goToSlide(numbSlide+1);
}

function lastSlide() {
    backToSlide(numbSlide-1);
}

function timerSlide() {
    timerId = setTimeout(remove, 2000);
}

function timerSlideback() {
    timerBackId = setTimeout(removeBack, 2000);
}

function remove() {
    for (i=0; i<slides.length; i++) {
        slides[i].classList.remove("unShowing");
    }
}

function removeBack() {
    for (i=0; i<slides.length; i++) {
        slides[i].classList.remove("back");
    }
}