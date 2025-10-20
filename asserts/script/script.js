const Slider = document.getElementById('slider');
const Previous = document.getElementById('previous');
const Next = document.getElementById('next');
const Card = document.getElementsByClassName('testimonial_slide')

let slideNumber = 1;
// console.log('hello Shan')
// RIGHT SLIDER //
const nextSlide = () => {
   Slider.style.transform = `translateX(-${slideNumber * 100}%)`;
        slideNumber ++;
}

const firstSlide = () => {
    Slider.style.transform = `translateX(0%)`;
        slideNumber = 1;
}

// LEFT SLIDER  //
const prevSlide = () => {
    Slider.style.transform = `translateX(-${(slideNumber - 2)*638}px)`
        slideNumber --;
}
const lastSlide = () => {
    Slider.style.transform = `translateX(-${(Card.length-1)* 638}px)`
        slideNumber = Card.length
}

Next.addEventListener('click',()=>{
    if(slideNumber < Card.length){
        nextSlide();
    }
    else{
        firstSlide();
    }
});

Previous.addEventListener('click', ()=>{
    if(slideNumber > 1){
        prevSlide();
    }
    else{
        lastSlide();
    }
})