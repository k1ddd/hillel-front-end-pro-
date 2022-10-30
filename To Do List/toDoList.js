const createNewMessage = document.querySelector("#push");
const newText = document.querySelector("#new__task input");
const tasks = document.querySelector("#tasks ");

createNewMessage.addEventListener("click", function () {
  if (newText.value) {
    const newTask = document.createElement("span");
    const del = document.createElement("button");
    del.classList.add("delete");
    del.innerHTML = "x";
    del.addEventListener("click", function () {
      del.parentNode.remove();
    });

    newTask.classList.add("new__task__to__do");
    newTask.innerHTML = newText.value;
    newText.value = "";
    newTask.append(del);

    tasks.prepend(newTask);
  } else return;
});
