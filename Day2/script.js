document.getElementById("add-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create <li>
  const listItem = document.createElement("li");
  listItem.className = "task-item";
  listItem.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  taskList.appendChild(listItem);
  taskInput.value = "";

  // Mark as completed
  listItem.querySelector(".complete-btn").addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  // Delete task
  listItem.querySelector(".delete-btn").addEventListener("click", () => {
    listItem.remove();
  });
});
