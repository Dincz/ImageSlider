//indicates the number
let flag = 0;

function controller(x){
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);
// function limiter(num,length){
//     if(num==length){
//         flag=0;
//         num=0;

//     }
// }
function slideshow(num){
    const slides = document.getElementsByClassName("slide");
    // limiter(num,slides.length);
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num < 0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for( let slide of slides){
        slide.style.display="none";
    }
    slides[num].style.display="block";
}