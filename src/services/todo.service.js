import { storageService } from './storage.service.js'
import { makeId } from './util.service.js'

export const todoService = {
    query,
    save,
    remove,
    getById,
    getEmptyTodo,
    tryTodo
}

const STORAGE_KEY = 'todos'

const gDefaultTodos = [
    { _id: 't_101', name: 'wash the dishes', isDone: false},
    { _id: 't_102', name: 'throw away the garbage', isDone: false },
    { _id: 't_103', name: 'do sports in the park', isDone: false },
    { _id: 't_104', name: 'Be Happy', isDone: false  }
]

var gTodos = _loadTodos()

function query(filterBy) {
    let todosToReturn = gTodos
    if (false && filterBy) {
        var { type = '', model = '', maxBatteryStatus, minBatteryStatus } = filterBy
        maxBatteryStatus = maxBatteryStatus || Infinity
        minBatteryStatus = minBatteryStatus || 0
        todosToReturn = gTodos.filter(todo => todo.type.toLowerCase().includes(type.toLowerCase()) && todo.model.toLowerCase().includes(model.toLowerCase())
            && (todo.batteryStatus < maxBatteryStatus)
            && todo.batteryStatus > minBatteryStatus)
    }
    return Promise.resolve([...todosToReturn])
}

function tryTodo(id) {
    const todo = gTodos.find(todo => todo._id === id)
    todo.batteryStatus -= 10
    return Promise.resolve()
}
function getById(id) {
    const todo = gTodos.find(todo => todo._id === id)
    return Promise.resolve({ ...todo })
}

function remove(id) {
    const idx = gTodos.findIndex(todo => todo._id === id)
    gTodos.splice(idx, 1)
    if (!gTodos.length) gTodos = gDefaultTodos.slice()
    storageService.store(STORAGE_KEY, gTodos)
    return Promise.resolve()
}

function save(todoToSave) {
    if (todoToSave._id) {
        const idx = gTodos.findIndex(todo => todo._id === todoToSave._id)
        gTodos.splice(idx, 1, todoToSave)
    } else {
        todoToSave._id = makeId()
        todoToSave.batteryStatus = 100
        gTodos.push(todoToSave)
    }
    storageService.store(STORAGE_KEY, gTodos)
    return Promise.resolve(todoToSave)

}

function getEmptyTodo() {
    return {
        model: '',
        isDone: false
    }
}


function _loadTodos() {
    let todos = storageService.load(STORAGE_KEY)
    if (!todos || !todos.length) todos = gDefaultTodos
    storageService.store(STORAGE_KEY, todos)
    return todos
}