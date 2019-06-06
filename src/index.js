document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', handleCreateTask)
  document.querySelector('#sorting').addEventListener('change', handleSortTasks)
})

function handleCreateTask(e) {
		e.preventDefault()
		const task = {
			description: e.target.new_task_description.value,
			color: e.target.priority.value
		}
		addNewTask(task)
}

function addNewTask(obj) {
	const ul = document.querySelector('#tasks')

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
	delete_btn.addEventListener('click', handleDeleteTask)

	ele.appendChild(delete_btn)
}

function handleDeleteTask(e) {
	e.target.parentElement.remove()
}

// SORTING

compare_methods = {
	'alpha': alphabetical,
	'asc_prio': ascending_priority,
	'desc_prio': descending_priority
}

color_codes = {
	'red': 4,
	'orange': 3,
	'yellow': 2,
	'green': 1,
	'black': 0
}

function handleSortTasks(e) {
	const ul = document.querySelector('#tasks')
	const list_items = Array.prototype.slice.call(ul.children).sort(compare_methods[e.target.value])

	list_items.forEach(li => ul.appendChild(li))
}

function alphabetical(a, b) {
  if (a.innerText.toLowerCase() < b.innerText.toLowerCase()) { return -1 }
  if (a.innerText.toLowerCase() > b.innerText.toLowerCase()) { return  1 }
  return 0
}

function ascending_priority(a, b) {
  if (color_codes[a.style.color] < color_codes[b.style.color]) { return -1 }
  if (color_codes[a.style.color] > color_codes[b.style.color]) { return  1 }
  return 0
}
function descending_priority(a, b) {
	return ascending_priority(b, a)
}
