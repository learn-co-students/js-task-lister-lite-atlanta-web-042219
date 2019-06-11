
const input = document.getElementById('new-task-description')
const form = document.getElementById('create-task-form')
const priority = document.getElementById('priority-list')
const sort = document.getElementById('newbutton')

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", handleCreate)
  sort.addEventListener("click", sortByList)
});



function priorityColor(li){
  if (priority.value=== "high"){
    li.style.color = "red"
  } else if (priority.value=== "medium"){
    li.style.color = "yellow"

  }else {
    li.style.color = "green"

  }
  
}


function sortByList(){
console.log('hey')
  z=[]
  Array.from(document.getElementsByTagName("li")).forEach(ele => {z.push(ele.innerText)})
  z.sort()
}


function handleCreate(e){
  e.preventDefault()

  // console.log(priority.value)
  const ul = document.getElementById("tasks")

  const li = document.createElement("li")
  li.innerText = input.value
  priorityColor(li)
  ul.appendChild(li)

  const delbtn = li.appendChild(document.createElement("button"))
  delbtn.innerText = "x"
  delbtn.id = "test"
 
  delbtn.addEventListener("click",handleDelete)
  e.target.reset()

}

function handleDelete(e){
  e.target.parentElement.remove()

}
