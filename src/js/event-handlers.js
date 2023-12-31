import { renderTodos, clearNewTodoInput, getTodoId } from "./ui"
import { getAllTodos, addTodo, removeTodo, updateTodo } from "./data"
import { capitalize } from 'lodash-es'
import { trim } from './helper'

export function onLoadEventHandler() {
    renderTodos(getAllTodos())
}


export function newTodoEventHandler(event) {
    let text = event.target.value
    // text = anotherFun(capitalize(trim(text)))
    text = text |> trim |> capitalize;
    addTodo({
        id: Date.now(),
        text: text,
        completed: false
    })
    renderTodos(getAllTodos())
    clearNewTodoInput()
}

export async function removeTodoEventHandler(event) {
    const id = getTodoId(event.target)
    removeTodo(id)
    renderTodos(getAllTodos())
    // import('bootstrap'/* webpackChunkName: "bootstrap" */).then(function ({ Modal }) {
    //     console.log('modal loaded.')
    // })
    const [{ Modal }, { default: $ }] = await Promise.all([
        import(
            'bootstrap'
            /* webpackChunkName: "bootstrap" */
        ),
        import(
            'jquery'
            /* webpackChunkName: "jquery" */
        )
    ]);
    console.log('loaded')
}

export function toggleTodoEventListener(event) {
    const id = getTodoId(event.target)
    const isCompleted = event.target.checked
    updateTodo(id, isCompleted)
    renderTodos(getAllTodos())
}