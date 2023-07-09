import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { List } from '../cmp/list'
import { TodoFilter } from '../cmp/todo-filter'
import { loadTodos, removeTodo, setFilterBy } from '../store/todo.actions'
// import {todoFilter} from 

export const TodoApp = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoModule.todos)

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    const onRemoveTodo = (todoId) => {
        dispatch(removeTodo(todoId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadTodos())
    }
    // const todos = [
    //     { _id: 't_101', task: 'wash the dishes', done: false },
    //     { _id: 't_101', task: 'throw away the garbage', done: false },
    //     { _id: 't_101', task: 'do sports in the park', done: false },
    // ]
    if (!todos) return <h1>Loading....</h1>
    return (
        <div>
            <Link to='/todo/edit'>Add todo</Link>
            <h1>Todo App</h1>
            <TodoFilter
            onChangeFilter={onChangeFilter}
            />
            < List
                onRemoveTodo={onRemoveTodo}
                todos={todos}
            />
        </div>
    )
}
