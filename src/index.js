document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(e.target.new_task_description.value);
    form.reset();
  });
  //Add task function
  function addTask(task) {
    let tasks = document.getElementById("tasks");
    let taskElement = document.createElement("p");
    taskElement.textContent = ` ${task} `;
    const select = givePriority();
    const deleteButton = deleteTask();
    taskElement.append(deleteButton);
    taskElement.prepend(select);
    tasks.append(taskElement);
  }
//Delete task function
  function deleteTask() {
    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
    deleteButton.textContent = "X";
    return deleteButton
  }
//Give priority to task function  
  function givePriority() {
    const select = document.createElement("select");
    let choosePriority = document.createElement("option");
    choosePriority.setAttribute("value", "none");
    choosePriority.setAttribute("selected", true);
    choosePriority.setAttribute("disabled", true);
    choosePriority.setAttribute("hidden", true);
    choosePriority.textContent = "Select priority";
    let high = document.createElement("option");
    select.addEventListener("click", function (e) {
      if (select.options[select.selectedIndex].value === "high") {
        e.target.parentNode.style.color = "red";
      } else if (select.options[select.selectedIndex].value === "medium") {
        e.target.parentNode.style.color = "orange";
      } else {
        e.target.parentNode.style.color = "green";
      }
    });
    high.setAttribute("value", "high");
    high.textContent = "High";
    let medium = document.createElement("option");
    medium.setAttribute("value", "medium");
    medium.textContent = "Medium";
    let low = document.createElement("option");
    low.setAttribute("value", "low");
    low.textContent = "Low";
    select.appendChild(choosePriority);
    select.appendChild(high);
    select.appendChild(medium);
    select.appendChild(low);
    return select;
  }
});
