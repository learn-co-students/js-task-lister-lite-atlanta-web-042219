document.addEventListener("DOMContentLoaded", runProgram);

//defining variable for global use
const newTask = document.querySelector("#new-task-description")
const submitButton = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

//get the program running (alternative would be putting everything in the event listener)
function runProgram() {
submitButton.addEventListener("submit", addItemToList)
}

function addItemToList(e){
  e.preventDefault()
const li = document.createElement("li") 
li.innerText = newTask.value
taskList.appendChild(li)

const deleteButton = document.createElement("button")
li.appendChild(deleteButton)
deleteButton.innerText = "Remove Item"
deleteButton.addEventListener("click", removeItem)
}

function removeItem(e){
  e.preventDefault()
  e.target.parentElement.remove()
}
