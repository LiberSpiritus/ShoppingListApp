'use strict';

const btnPlus = document.querySelector(".btnPlus");
const btnAll = document.querySelector(".btnAll");
const input = document.querySelector(".bottomContent input");
const topContent = document.querySelector(".topContent");


// 플러스 버튼 클릭시 리스트 추가
btnPlus.addEventListener("click",function(){
    input.focus(); // 버튼클릭시 무조건 입력한 곳에 focus가 오게하기 21.8.23
    loopValueAdd(input.value);

});

// 모두 삭제 버튼 클릭시 리스트 모두 삭제
btnAll.addEventListener("click",function(){

    loopValueAllRemove();   

});

// Enter 입력시 리스트 추가
input.addEventListener("keydown",function(e){
    // e.keyCode가 Enter(13)일때
    if(e.keyCode === 13){
        loopValueAdd(input.value);
    }
});



function loopValueAdd(inputVal){
    // 입력 값이 없을시 리스트 추가 안되게 추가 21.8.23
    if(inputVal.length > 0){
        topContent.innerHTML += `<ul><li><span>${inputVal}</span><span><i class=\"fas fa-trash\"></i></span></li></ul>`;
        input.value = "";

        loopValueRemove();
    }
        
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

        const confirmValue = confirm('정말 삭제 하시겠습니까?');

        // 정말 모두 삭제 할지의 구문 추가
        if(confirmValue === true){
            for(var i = 0; i < topContentList.length; i++){
                // console.log(topContentList[i]);
                topContentList[i].remove();
            }
        }

        
    }
}