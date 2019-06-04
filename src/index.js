document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#create-task-form').addEventListener('submit', handleTodo)
    // addTodo()
})

function handleTodo(e){

  e.preventDefault()
  // console.log("children of form", e.target.children)
  // console.log("event", e.target)
  // console.log("test", )
  // console.log("new", e.target.task.value)

 const todo = e.target.children[1].value
 
  console.log(todo)
  addTodo(todo)

  e.target.reset()
}

function addTodo(todo){ 
  const list = document.querySelector('#tasks')

    const li = document.createElement('li')
    
    li.textContent = todo

        list.appendChild(li)
}
;
