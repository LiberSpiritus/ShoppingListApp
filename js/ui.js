'use strict';

const btnPlus = document.querySelector(".btnPlus");
const input = document.querySelector(".bottomContent input");
const topContent = document.querySelector(".topContent");



btnPlus.addEventListener("click",function(){
    // 1. input val 가져오기
    loopValueAdd(input.value);
    // 2. html,css 잡아놓았던 li 태그 가져오기

});

input.addEventListener("keydown",function(e){
    // 1. input val 가져오기
    if(e.keyCode === 13){
        loopValueAdd(input.value);
    }
    // 2. html,css 잡아놓았던 li 태그 가져오기
});



function loopValueAdd(inputVal){
    topContent.innerHTML += `<ul><li><span>${inputVal}</span><span><i class=\"fas fa-trash\"></i></span></li></ul>`;
    input.value = "";

    loopValueRemove();
        
}

function loopValueRemove(){
    const trashBtn = document.querySelectorAll(".fa-trash");
    for(var i = 0; i < trashBtn.length; i++){
        trashBtn[i].addEventListener("click",function(e){
            e.target.parentElement.parentElement.remove();
        });

    }
}