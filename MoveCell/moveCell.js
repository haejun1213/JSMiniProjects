window.onload = function () {
    // 페이지가 로드된 후에 스크립트를 실행
    const startBtn = document.querySelector("#startBtn");

    // 시작 버튼에 클릭 이벤트 리스너를 추가
    startBtn.addEventListener("click", function () {
        const numberInput = document.querySelector("#numberInput");

        // 사용자 입력 또는 플레이스홀더 값을 기반으로 테이블 크기를 결정
        let size;
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        console.log(size); // 디버깅을 위해 크기를 로그에 출력

        const tableArea = document.querySelector(".tableArea");

        // 지정된 크기로 테이블의 HTML을 생성
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        tableArea.innerHTML = cellHTML; // 테이블을 DOM에 삽입

        const tds = document.querySelectorAll("td");

        // 초기 셀을 랜덤하게 선택하여 표시
        let curLoc = Math.floor(Math.random() * size * size);
        tds[curLoc].style.backgroundColor = "violet";
        console.log(curLoc); // 디버깅을 위해 초기 셀 위치를 로그에 출력

        // 키다운 이벤트 리스너를 추가
        window.onkeydown = function (event) {
            // 화살표 키 이벤트가 아닌 경우 무시
            if (event.keyCode < 37 || event.keyCode > 40) return;

            tds[curLoc].style.backgroundColor = "white"; // 현재 셀의 배경색을 흰색으로
            let row = Math.floor(curLoc / size); // 현재 셀의 행을 계산
            let col = curLoc % size; // 현재 셀의 열을 계산

            // 화살표 키에 따라 셀 위치를 이동
            switch (event.key) {
                case 'ArrowLeft':
                    curLoc += (col > 0 ? -1 : size - 1);
                    break;
                case 'ArrowRight':
                    curLoc += (col < size - 1) ? 1 : -(size - 1);
                    break;
                case 'ArrowUp':
                    curLoc += (row > 0 ? -size : (size - 1) * size);
                    break;
                case 'ArrowDown':
                    curLoc += Number((row < size - 1) ? size : -(size - 1) * size);
                    break;
            }
            // 끝에 도달했을 때 반대편으로 이동하게하기 위해서 삼항연산자로 연산

            console.log(curLoc); // 디버깅을 위해 업데이트된 셀 위치를 로그에 출력

            tds[curLoc].style.backgroundColor = "violet"; // 셀 이동 표시합니다
        }
    });
}
