document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit', handleCreateTask)
});

function handleCreateTask(e) {
  e.preventDefault()

  const task = e.target['new-task-description'].value
  const color = e.target['color-select'].value
  addNewTask(task, color)
  
  e.target.reset()
}

function addNewTask(task, color) {
  const taskList = document.querySelector('#tasks')

  const li = document.createElement('li')
  li.innerHTML = `${task} `
  li.style.color = color
  const delBtn = document.createElement('button')
  delBtn.innerText = 'x'

  li.appendChild(delBtn)

  delBtn.addEventListener('click', handleDeleteTask)
  taskList.appendChild(li)
}

function handleDeleteTask(e) {
  e.target.parentElement.remove()
}

// function validateForm() {
//   const task = document.querySelector('#new-task-description').value
//   const color = document.querySelector('#color-select').value

//   if (task==='' || color===''){
//     alert("input can't be blank")
//     return false
//   }
//   return true
// }
// function sortColor() {
//   const sortTable = {
//     red: 1,
//     yellow: 2,
//     green: 3
//   }

//   const li = document.querySelector('#tasks')

//   console.log(li)
//   li.map(sortTable, function(task, sortTable) {
//     console.log(task.color)
//   })
// }