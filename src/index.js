document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', handleCreateTask)
  document.querySelector('#sorting').addEventListener('change', handleSortTasks)
});

function handleCreateTask(e) {
	if (e.target.new_task_description.value !== '') {
		e.preventDefault()
		let task = {
			description: e.target.new_task_description.value,
			color: e.target.priority.value
			// date: 
		}
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


sort_methods = {
	'alpha': compare_li_text,
	'asc_prio': ascending_priority,
	'desc_prio': descending_priority
}

function handleSortTasks(e) {
	let ul = document.querySelector('#tasks')

	let nodelist = e.target.parentElement.childNodes[3].childNodes
	let list_items = Array.prototype.slice.call(nodelist)

	list_items.shift()
	list_items.sort(sort_methods[e.target.value])

	console.log(list_items[0].style.color)

	for(index in list_items) {
		list_items[index].remove()
		ul.appendChild(list_items[index])
	}
}


function compare_li_text(a, b) {
  if (a.innerText.toLowerCase() < b.innerText.toLowerCase()){
    return -1;
  }
  if (a.innerText.toLowerCase() > b.innerText.toLowerCase()){
    return 1;
  }
  return 0;
}

function ascending_priority(a, b) {
	color_codes = {
		'red': 4,
		'orange': 3,
		'yellow': 2,
		'green': 1,
		'black': 0
	}
  if (color_codes[a.style.color] < color_codes[b.style.color]){
    return -1;
  }
  if (color_codes[a.style.color] > color_codes[b.style.color]){
    return 1;
  }
  return 0;
}
function descending_priority(a, b) {
	return ascending_priority(b, a)
}








