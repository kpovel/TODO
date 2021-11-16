const InProgress = 'In Progress';
const Done = 'Done';
const TODO = 'To Do'

const list = [
    {
        id: 1,
        name: 'create a post',
        status: TODO,
        priority: 'low'
    },
    {
        id: 2,
        name: 'test',
        status: Done,
        priority: 'high'
    }
]

function changeStatus(task, newStatus) {
    list[task].status = newStatus
}

function changePriority(task, newPriority) {
    list[task].priority = newPriority
}

function addTask(nameTask) {
    if (!nameTask){
        return
    }
    list.push({
        id: list.length+1,
        name: nameTask,
        status: TODO,
        priority: 'low'
    })
}

function deleteTask(task) {
    list.splice(task - 0, 1)
}


function showList() {
    let i

    console.log(`${TODO}:`)
    let taskTodo = list.filter(function (item) {
        return item.status === TODO
    })
    taskTodo.forEach(function (item) {
        console.log(item.name)
        i++
    })

    console.log(`${InProgress}:`)
    let taskInProgress = list.filter(function (item) {
        return item.status === Done
    })
    taskInProgress.forEach(function (item) {
        console.log(item.name)
        i++
    })

    console.log(`${Done}:`)
    let taskDone = list.filter(function (item) {
        return item.status === Done
    })
    taskDone.forEach(function (item) {
        console.log(item.name)
        i++
    })
}

deleteTask(1)
changeStatus(0, Done)
addTask('1')
addTask('2')
addTask('3')
changeStatus(3, Done)
deleteTask(3)

changePriority(0, 'high')

console.log(list)
showList()