document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
const form = document.querySelector("#create-task-form")

form.addEventListener("submit", addTask)


});


function addTask(e) {
e.preventDefault()
let input = document.querySelector("#new-task-description").value
console.log("the user's input is:", input)

let list = document.querySelector("#tasks")
console.log("this is my list", list)
let li = document.createElement("li")
li.innerText = input
console.log("this is the li", li)
  list.appendChild(li)

  var btn = document.createElement("BUTTON");
  btn.innerText = "X"
  li.appendChild(btn);

  btn.addEventListener("click", deleteTask)

  function deleteTask(e) {
    e.target.parentElement.remove()
  }

}

