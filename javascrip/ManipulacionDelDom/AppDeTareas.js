let lista = [];

function addtask() {
  const input = document.getElementById("input-task");
  const text = input.value;
  console.log(text);

  const obj = { task: text, completed: false };
  if (text !== "") {
    lista.push(obj);
  }

  const list = document.getElementById("task-list");

  //crear un elemento html

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.textContent = obj.task; //asigna a text content del valor que captura de la task
  li.append(checkbox);

  list.append(li);
}
