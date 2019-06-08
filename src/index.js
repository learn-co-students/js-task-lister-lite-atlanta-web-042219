document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById("create-task-form")
  input = document.querySelector("#new-task-description")
  form.addEventListener("submit", createTask)
})

function createTask(e) {
  e.preventDefault()
  const newTask = document.createElement('li')
  newTask.innerHTML = input.value
  
  addTask(newTask)
  e.target.reset()
}

function addTask(task) {
  document.querySelector("#tasks").appendChild(task)
}
