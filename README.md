# ShoppingListApp
 
HTML, CSS한일
1. HTML마크업 및 CSS 스타일링
2. 본문 내용중 리스트형식으로 마크업된 정적인 요소를 주석처리
3. 플러스 버튼, 휴지통 버튼 호버 이벤트 및 transition 효과 사용.

JS로 한일
1. 플러스 버튼 클릭 이벤트 시
리스트 형식으로 동적으로 처리 되는 과정을 행하기 위해
본문 내용을 선택하여 innerHTML, += 요소를 이용하여 중첩시켜 사용하였다.
그렇게 해서 본운 내용안에 리스트가 하나씩 추가됨.
2. input 요소의 값을 리스트에 뿌려주기 위해 input.value값을 가져온후, innerHTML에 추가 시키는 작업을 함.
3. 삭제 기능을 구현하려 했지만, 동적인 querySelector다보니 처음엔 애를 먹었으나.
리스트 추가시키는 function을 만들고, 리스트 추가 시키는 function안에 삭제 시키는 로직을 따로 빼서 휴지통 모양 클릭시 리스트를 삭제 할수 있는 function을 만들어서 진행했다.
4. 그러나, 이 요소는 다중이기때문에 querySelectorAll을 사용하여야 했다.
querySelectorAll을 사용하려면 반복문을 이용하여야 했기에 for문안에다가 클릭이벤트를 구현하였더니 잘 작동하는것을 확인함!!