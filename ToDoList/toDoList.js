window.onload = function () {
    // 로컬 스토리지에서 'todolist'를 가져와서 객체로 변환
    const savedTodoList = JSON.parse(localStorage.getItem('todolist'));

    // savedTodoList(로컬 데이터)가 존재하면 실행
    if (savedTodoList) {
        for (let i = 0; i < savedTodoList.length; i++) {
            console.log(savedTodoList[i]);
            // savedTodoList[i]를 전달인자로 전달하여 addTodoList 함수 호출
            addTodoList(savedTodoList[i])
        }
    }
    
    // todoInput과 addBtn 요소를 선택
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    
    // addBtn 클릭 시 할 일 추가
    addBtn.addEventListener("click", function () {
        if (todoInput.value != "") addTodoList();
    });
    
    // Enter 키 입력 시 할 일 추가
    window.onkeydown = function (event) {
        if (event.key == "Enter" && todoInput.value != "") addTodoList();
    };
}

function saveItems() { // 로컬에 데이터 저장하기

    const saveItems = []; // 빈 배열 할당
    const listArea = document.querySelector(".listArea")

    // listArea의 모든 자식 노드를 순회
    for (let node of listArea.children) {
        textNode = node.querySelector('span');
        const todoObj = {
            todo: textNode.textContent, // 할 일 텍스트
            check: textNode.classList.contains('check') // 완료 여부
        };
        saveItems.push(todoObj);
    }
    console.log(JSON.stringify(saveItems));

    // 로컬 스토리지에 'todolist'로 저장
    localStorage.setItem('todolist', JSON.stringify(saveItems));
}

function addTodoList(savedTodo) {

    if (savedTodo) {
        console.log(savedTodo)
    } else {
        console.log(todoInput.value);
    }

    const listArea = document.querySelector(".listArea");

    // 새로운 할 일 항목(li) 생성
    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    // liNode에 버튼과 텍스트, 삭제 버튼 추가
    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);

    if (savedTodo) {
        // 저장된 할 일 항목 로드
        todoText.innerText = savedTodo.todo;
        if (savedTodo.check) {
            todoText.classList.add("check");
            checkBtn.innerHTML = "✔";
        }
    } else {
        // 새로운 할 일 텍스트 설정
        todoText.innerText = todoInput.value;
        todoInput.value = "";
    }
    delBtn.innerText = "X"

    // 클래스 추가
    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");
    saveItems();

    // 완료 버튼 클릭 시 처리
    checkBtn.addEventListener("click", function () {
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        } else {
            checkBtn.innerHTML = "";
        }
        todoText.classList.toggle("check");
        saveItems()
    })

    // 삭제 버튼 클릭 시 처리
    delBtn.addEventListener("click", function () {
        liNode.remove();
        saveItems()
    })

    console.log(listArea.lastChild);
}
