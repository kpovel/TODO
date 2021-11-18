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
    if (user !== -1){
        list[user].status = newStatus
    }
}

function changePriority(id, newPriority) {
    let user = list.findIndex(function (item) {
        return item.id === id
    })
    if (user !== -1){
        list[user].priority = newPriority
    }
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

function showList() {
    console.log(`\n${TODO}:`)
    list.forEach(function (item) {
        if (item.status === TODO) {
            console.log(item.name)
        }
    })

    console.log(`\n${InProgress}:`)
    list.forEach(function (item) {
        if (item.status === InProgress) {
            console.log(item.name)
        }
    })

    console.log(`\n${Done}:`)
    list.forEach(function (item) {
        if (item.status === Done) {
            console.log(item.name)
        }
    })

    console.log(`\nOther:`)
    list.forEach(function (item) {
        if (item.status == !((TODO) || (InProgress) || (Done))) {
            console.log(item.name)
        }
    })
}

addTask('1')
addTask('2', '')
addTask('three', 'medium')
deleteTask(3)
changeStatus(2, InProgress)
changePriority(4,'low')

console.log(list)
showList()