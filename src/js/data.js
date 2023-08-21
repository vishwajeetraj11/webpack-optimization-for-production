import initialTodos from '../todos.json'

export function getAllTodos() {
    return initialTodos
}

export function addTodo(todo) {
    initialTodos.push(todo)
}

export function removeTodo(id) {
    initialTodos = initialTodos.filter(function (item) {
        return item.id !== id
    })
}

export function updateTodo(id, completed) {
    const itemIndex = initialTodos.findIndex(function (value) {
        return value.id === id
    })
    initialTodos[itemIndex].completed = completed
}


