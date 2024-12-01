class Task {
    constructor(text, checked = false) {
        this.text = text;
        this.checked = checked;
        this.element = this.createTask();
    }

    createTask() {
        const li = document.createElement("li");
        li.classList.add("theTask");

        const checkbx = document.createElement("input");
        checkbx.type = "checkbox";
        checkbx.classList.add("check");
        checkbx.checked = this.checked;

        const input = document.createElement("input");
        input.type = "text";
        input.value = this.text;
        input.classList.add("task-element");
        input.disabled = true;

        const deletebtn = document.createElement("button");
        deletebtn.classList.add("delete");

        li.appendChild(checkbx);
        li.appendChild(input);
        li.appendChild(deletebtn);

        // Event Listeners
        checkbx.addEventListener("change", () => {
            input.classList.toggle("checked", checkbx.checked);
            this.checked = checkbx.checked;
            saveTasks();
        });

        deletebtn.addEventListener("click", () => {
            li.remove();
            taskList = taskList.filter((task) => task !== this);
            saveTasks();
        });

        input.addEventListener("dblclick", () => {
            input.disabled = false;
            input.focus();
        });

        input.addEventListener("blur", () => {
            input.disabled = true;
            this.text = input.value;
            saveTasks();
        });

        return li;
    }
}

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
//!
function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(taskList.map((task) => ({ text: task.text, checked: task.checked })))
    );
}
//---
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const task = new Task(taskText);
    taskList.push(task);
    document.querySelector("ol").appendChild(task.element);

    saveTasks();
    taskInput.value = ""; 
}

function getTasks() {
    taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList = taskList.map((task) => new Task(task.text, task.checked));
    const list = document.querySelector("ol");
    list.innerHTML = "";
    taskList.forEach((task) => list.appendChild(task.element));
}

getTasks();
