var input = document.getElementById("todo-input");
var addtodo = document.getElementById("add-button");

var todolist = JSON.parse(localStorage.getItem("todolist"));

if (todolist !== null && todolist !== "") {
    todolist = JSON.parse(todolist);
    todolist.forEach(element => {
        if(element.status){
            li.style.textDecoration = "line-through";
            li.style.opacity = 0.5;
        }else{
            li.style.textDecoration = "none";
                li.style.opacity = 1;
        }
        var li = document.createElement("li");
        li.style.textDecoration = "none";
        li.style.marginBottom = "10px";
        li.className = "list-group-item list-group-item-secondary";
        li.onclick = function () {
            if (li.style.textDecoration != "none") {
                li.style.textDecoration = "none";
                li.style.opacity = 1;
                element.status = false;
                saveToLocal();
            } else {
                li.style.textDecoration = "line-through";
                li.style.opacity = 0.5;
                element.status = true;
                saveToLocal();
            }
        }
        var delbutton = document.createElement("button");
        delbutton.className = "btn-close";
        delbutton.style.float = "right";
        delbutton.onclick = function () {
            document.getElementById("list").removeChild(li);
        }

        li.innerHTML = element.text;
        li.appendChild(delbutton);
        document.getElementById("list").appendChild(li);
    });
} else {
todolist = [];
}



function onClickAddButton() {
    if (input.value !== "") {
        todolist.push({
            id: todolist.length,
            text: "",
            status: false
        });

        var element = todolist[todolist.length -1];

        var todo = input.value.trim();
        var li = document.createElement("li");
        li.style.textDecoration = "none";
        li.style.marginBottom = "10px";
        li.className = "list-group-item list-group-item-secondary";
        li.onclick = function () {
            if (li.style.textDecoration != "none") {
                li.style.textDecoration = "none";
                li.style.opacity = 1;
            } else {
                li.style.textDecoration = "line-through";
                li.style.opacity = 0.5;
            }
        }
        var delbutton = document.createElement("button");
        delbutton.className = "btn-close";
        delbutton.style.float = "right";
        delbutton.onclick = function () {
            document.getElementById("list").removeChild(li);
        }

        li.innerHTML = todo;
        element.text = todo;
        li.appendChild(delbutton);
        document.getElementById("list").appendChild(li);

        saveToLocal();


        input.value = "";
    } else {
        alert("lütfen bir todo giriniz");
    }
}

function saveToLocal(){
    localStorage.setItem("todolist",JSON.stringify(todolist));
}
