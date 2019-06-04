    document.addEventListener("DOMContentLoaded", () => {
      let newTaskForm = document.querySelector('#create-task-form')
      newTaskForm.addEventListener('submit', handleCreateTask)
    });

    function handleCreateTask(e){

        e.preventDefault()
        const newTask = e.target["new-task-description"].value
        const color = e.target["color-select"].value
        addANewTask(newTask, color)
        e.target.reset()
    }

    function handleDeleteButton(e) {
      e.target.parentElement.remove()
    }

    // function validateForm(){
    //   var newTaskDescription = document.querySelector('#new-task-description').value
    //   var colorSelect = document.querySelector('#color-select').value
    //
    //   if (newTaskDescription == '' || colorSelect == '')
    //     alert('Input field cannot be empty')
    // }
    //

    function addANewTask(newTask, color){
      const taskList = document.querySelector('#tasks')
      const li = document.createElement('li')
      li.innerText = `${newTask} `
      li.style.color = color
      const delBtn = document.createElement('button')
      delBtn.innerText = "X"
      delBtn.addEventListener('click',handleDeleteButton)
      li.appendChild(delBtn)
      taskList.appendChild(li)
    }
