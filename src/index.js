document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', handleTodo)

})

function handleTodo(e){

  e.preventDefault()
// what is the preventDefault

// console.log("exblain", e.target.children)
  const todo = e.target.children[1].value

    console.log(todo)
    addTodo(todo)

    e.target.reset()
}

function addTodo(todo){
  const list = document.querySelector('#tasks')

    const li = document.createElement('li')

    li.textContent = todo
// innerText
      list.appendChild(li)
}