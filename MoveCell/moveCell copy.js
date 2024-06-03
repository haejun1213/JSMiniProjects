window.onload = function () {
    // startBtn 요소 선택
    const startBtn = document.querySelector("#startBtn");

    // startBtn 클릭 이벤트 리스너 추가
    startBtn.addEventListener("click", function () {
        const numberInput = document.querySelector("#numberInput");
        
        // 입력된 값이 없으면 placeholder 값을 사용하고, 입력된 값이 있으면 해당 값을 사용
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        } else {
            size = numberInput.value;
        }
        console.log(size);

        // tableArea 요소 선택
        const tableArea = document.querySelector(".tableArea");

        // size 크기의 테이블 생성
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        
        // tableArea에 생성된 테이블 추가
        tableArea.innerHTML = cellHTML;

        // 모든 <td> 요소 선택
        const tds = document.querySelectorAll("td");

        // 랜덤한 위치를 선택하여 보라색으로 표시
        let curLoc = Math.floor(Math.random() * size * size);
        tds[curLoc].style.backgroundColor = "violet";
        console.log(curLoc);

        // 키다운 이벤트 리스너 추가
        window.onkeydown = function (event) {
            // 화살표 키가 아닌 경우 무시
            if (event.keyCode < 37 || event.keyCode > 40) return;

            // 현재 위치의 색상을 흰색으로 변경
            tds[curLoc].style.backgroundColor = "white";
            let row = Math.floor(curLoc / size);
            let col = curLoc % size;

            // 화살표 키에 따라 위치 변경
            switch (event.key) {
                case 'ArrowLeft':
                    col--;
                    if (col == 0) curLoc += (size - 1);
                    else curLoc--;
                    break;
                case 'ArrowUp':
                    curLoc -= size;
                    if (curLoc < 0) curLoc += size * size;
                    break;
                case 'ArrowDown':
                    curLoc += size;
                    if (curLoc >= size * size) curLoc -= size * size;
                    break;
                case 'ArrowRight':
                    col = curLoc % size;
                    if (col == size - 1) curLoc -= (size - 1);
                    else curLoc++;
                    break;
            }
            console.log(curLoc);

            // 새로운 위치를 보라색으로 표시
            tds[curLoc].style.backgroundColor = "violet";
        }
    });
}
