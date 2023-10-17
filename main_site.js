setInterval(function(){document.querySelector('.main_image').style.opacity = 1;},200);
let right_button_count = 0;
window.onload = function(){
    let right_button = document.querySelector('.right');
    let side_box = document.querySelector('.side_box');
    right_button.addEventListener('click', function(){
        right_button_count++;
        if(right_button_count % 2 != 0) side_box.style.width = '400px';
        else side_box.style.width = '0px';
    });
}