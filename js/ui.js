'use strict';

const btnPlus = document.querySelector(".btnPlus");
const btnAll = document.querySelector(".btnAll");
const input = document.querySelector(".bottomContent input");
const topContent = document.querySelector(".topContent");



btnPlus.addEventListener("click",function(){
    // 1. input val 가져오기
    loopValueAdd(input.value);

});

btnAll.addEventListener("click",function(){

    loopValueAllRemove();   

});

input.addEventListener("keydown",function(e){
    // e.keyCode가 Enter(13)일때
    if(e.keyCode === 13){
        loopValueAdd(input.value);
    }
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

// 모두 제거 기능 추가 21.8.22
function loopValueAllRemove(){
    const topContentList = document.querySelectorAll(".topContent ul");
    
    // 리스트에 내용이 하나라도 있을경우에만 로직 작동.
    if(topContentList.length > 0){
        // console.log(topContentList.length);
        for(var i = 0; i < topContentList.length; i++){
            // console.log(topContentList[i]);
            topContentList[i].remove();
        }
    }
}