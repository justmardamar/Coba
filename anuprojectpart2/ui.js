let list = document.querySelector('.carousel-inner');
let items = document.querySelectorAll('.carousel-indicators .carousel-item');
let dots = document.querySelectorAll('.carousel-indicators button');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengtitems = items.length - 1;


next.onclick = function(){
    if(active + 1 > lengtitems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active -  1 <0){
        active = lengtitems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlide = setInterval(()=>{next.click()},5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlide);
    refreshSlide = setInterval(()=>{next.onclick()},5000)
}
dots.forEach((li,key) => {
    li.addEventListener('click',function(){
        active = key;
        reloadSlider();
    })
})