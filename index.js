document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("add-todo");
    const input = document.querySelector("#add-todo input[type='text']");
    const todoList = document.getElementById("todo-list");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const todoText = input.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        input.value = "";
      }
    });
  
    function addTodoItem(text) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = text;
      li.appendChild(button);
      todoList.appendChild(li);
  
      button.addEventListener("click", function() {
        toggleDone(button);
      });
  
      button.addEventListener("dblclick", function() {
        li.remove();
      });
    }
  
    function toggleDone(button) {
      button.style.textDecoration = button.style.textDecoration === "line-through" ? "none" : "line-through";
    }
  });
  