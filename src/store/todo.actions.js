import { todoService } from "../services/todo.service"

export function loadTodos() {

    return async (dispatch, getState) => {
        try {
            const filterBy = getState().todoModule.filterBy 
            // const filterBy ={}
            const todos = await todoService.query(filterBy)
            dispatch({ type: 'SET_TODOS', todos })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeTodo(todoId) {

    return async (dispatch) => {
        try {
            const todos = await todoService.remove(todoId)
            dispatch({ type: 'REMOVE_TODO', todoId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}