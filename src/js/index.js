import { onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler, toggleTodoEventListener } from './event-handlers'
// import '../style/index.css'
// import '../style/index.less'
import '../style/vendors.scss'
import '../style/index.scss'

// UNCMNT: this is for manual dev server setup
// export function renderApp() {
//     onLoadEventHandler()
// }

window.addEventListener('load', onLoadEventHandler)

document.addEventListener('change', function (event) {
    if (event.target.classList.contains('new-todo')) {
        newTodoEventHandler(event)
    }
})
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        removeTodoEventHandler(event)
    }
    // if (event.target.classList.contains('real-checkbox')) {
    if (event.target.dataset.element === 'real-checkbox') {
        toggleTodoEventListener(event)
    }
})


