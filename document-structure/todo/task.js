const tasksInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function taskWrite() {
    return `<div class="task">
                <div class="task__title">
                    ${tasksInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
}

tasksInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && tasksInput.value.trim() !== "") {
        event.preventDefault();
        tasksList.insertAdjacentHTML("beforeEnd", taskWrite());
        tasksInput.value = "";
    }    
});

tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(typeof tasksInput.value);
    if (tasksInput.value.trim() !== "") {
        tasksList.insertAdjacentHTML("beforeEnd",taskWrite());
        tasksInput.value = "";
    }    
});

tasksList.addEventListener("click", (event) => {
    if (event.target.classList.contains("task__remove")) {
        event.preventDefault();
        event.target.closest(".task").remove();
    }
});