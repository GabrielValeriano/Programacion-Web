const name = "Joel";
localStorage.setItem("name", name);

const password = "1234";
localStorage.setItem("password", password);

async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

function addtask() {
  const input = document.getElementById("input-task");
  const text = input.value;
  console.log(text);

  const input2 = document.getElementById("input-task2");
  const text2 = input2.value;
  console.log(text2);

  const obj = { task: text, completed: false };
  if (text === "Joel" && text2 === "1234") {
    getUsers();
  } else {
    const p = document.createElement("p");
    p.textContent = "No estas en el servidor >:(";
    body.append(p);
  }
}
