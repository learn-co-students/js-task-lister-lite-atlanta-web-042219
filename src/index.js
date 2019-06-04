document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#create-task-form').addEventListener('submit', handleTodo)
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


    // const li = document.createElement('li')
    
    list.innerHTML += '<li>' + todo + '<button onclick="handleDelete(this);">x</button></li>';

        // list.appendChild(li)
}
function handleDelete(x){
  console.log(x.parentNode)
  console.log(x.parentNode.parentNode)
  x.parentNode.parentNode.removeChild(x.parentNode);
}
