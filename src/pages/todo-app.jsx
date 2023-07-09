import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from '../cmp/list'
import { loadTodos, removeTodo } from '../store/todo.actions'

export const TodoApp = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoModule.todos)

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    const onRemoveTodo = (todoId) => {
        dispatch(removeTodo(todoId))
    }
    // const todos = [
    //     { _id: 't_101', task: 'wash the dishes', done: false },
    //     { _id: 't_101', task: 'throw away the garbage', done: false },
    //     { _id: 't_101', task: 'do sports in the park', done: false },
    // ]
    if (!todos) return <h1>Loading....</h1>
    return (
        <div>
            <h1>Todo App</h1>
            < List
                onRemoveTodo={onRemoveTodo}
                todos={todos}
            />
        </div>
    )
}

