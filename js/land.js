const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = "-100%";  
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginleft = "-100%";  
    }, 500);
}

slider.addEventListener('mouseover', function(){
    Next();
});

slider.addEventListener('mouseover', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 3500)
/*src="https://www.youtube.com/embed/WI0aCIEYXvw"*/

addEventListener('DOMContentloaded', () => {
    const bmenu = document.querySelector('.bmenu')
    if (bmenu) {
        bmenu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

