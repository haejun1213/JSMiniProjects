// 페이지가 전부 로딩되었을 때
window.onload = function () { 
    // querySelector로 버튼
    const btnNode = document.querySelector("button");
    // click 이벤트가 발생했을 때
    btnNode.addEventListener("click", function() {

        //input 태그에 id가 danInput 객체의 값 받아와서 danNum으로 선언
        const danNum = document.querySelector("#danInput").value;
        console.log(danNum); // 확인
    
        //innerHTML로 danNum단 출력
        document.querySelector("#danNumber").innerHTML = `${danNum}단`;
        
        //id가 result인 노드 선택
        const resultNode = document.querySelector("#result");
        //result 선언
        let result = "";
        //result에 구구단 쓸 반복문
        for (let i = 1; i <= 9; i++) {
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`;
        }
        //resultNode에 result innerHTML로 쓰기
        resultNode.innerHTML = result;
        //class displayArea의 disply속성 block으로
        document.querySelector(".displayArea").style.display = "block";
    });
}
