document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', handleCreateTask)
});

function handleCreateTask(e) {
	if (e.target.new_task_description.value !== '') {
		e.preventDefault()
		console.log(e.target)
		let task = {
			description: e.target.new_task_description.value,
			color: e.target.priority.value
		}
		console.log(task)
		addNewTask(task)
	}
}

function addNewTask(obj) {
	let ul = document.querySelector('#tasks')

	const new_task = document.createElement('li')
	new_task.innerText = obj.description+' '
	new_task.style=`color: ${obj.color};`

	appendDeleteButton(new_task)
	ul.appendChild(new_task)
}

function appendDeleteButton(ele) {
	const delete_btn = document.createElement('input')
	delete_btn.type = 'submit'
	delete_btn.value = 'delete'

	ele.appendChild(delete_btn)
	delete_btn.addEventListener('click', handleDeleteTask)
}

function handleDeleteTask(e) {
	e.target.parentElement.remove()
}