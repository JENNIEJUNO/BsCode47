let right_button_count = 0;//side 메뉴 여닫기 카운트
window.onload = function(){
    let right_button = document.querySelector('.right');
    let side_box = document.querySelector('.side_box');
    right_button.addEventListener('click', function(){
        right_button_count++;
        if(right_button_count % 2 != 0) side_box.style.width = '400px';
        else side_box.style.width = '0px';
    });
}

setInterval(function(){document.querySelector('.main_image').style.opacity = 1;},200);//메인 이미지 나타나게 하기
let click_sub_menu = document.querySelectorAll('.click_sub_menu');
let sub_menu = document.querySelectorAll('.sub_menu');

let sub_menu_count = 0;//sub menu 카운트
for(let i = 0; i < click_sub_menu.length; i++){
    click_sub_menu[i].addEventListener('click', function(){
        sub_menu_count++;
        //About ME에 서브메뉴가 없어서 i - 1
        if(sub_menu_count % 2 != 0){sub_menu[i-1].style.height = 'auto'; sub_menu[i-1].style.marginTop = '10px';}
        else{sub_menu[i-1].style.height = '0px'; sub_menu[i-1].style.marginTop = '0px';}
    });
}
