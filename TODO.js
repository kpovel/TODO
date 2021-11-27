const InProgress = 'In Progress';
const Done = 'Done';
const TODO = 'To Do';
let idCount = 2;

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

function changeStatus(id, newStatus) {
    let user = list.findIndex(function (item) {
        return item.id === id
    })
    list[user].status = newStatus
}

function changePriority(id, newPriority) {
    let user = list.findIndex(function (item) {
        return item.id === id
    })
    list[user].priority = newPriority
}

function addTask(nameTask, status = TODO, priority = '-') {
    if (!nameTask) {
        return
    }
    list.push({
        id: ++idCount,
        name: nameTask,
        status: status,
        priority: priority,
    })
}

function deleteTask(id) {
    let user = list.findIndex(function (item) {
        return item.id === id
    })
    list.splice(user, 1)
}

function showList(status) {
    console.log(`\n${status}:`)
    list.forEach(function (item) {
        if (item.status === status) {
            console.log(item.name)
        }
    })
}

addTask('1')
addTask('2', '')
addTask('three', 'high')
deleteTask(3)
changeStatus(2, InProgress)
changePriority(4, 'low')

console.log(list)
showList(TODO)
showList(InProgress)
showList(Done)