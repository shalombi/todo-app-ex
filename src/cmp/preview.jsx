import React from 'react'
import { Link } from 'react-router-dom'


export const Preview = ({ todo, onRemoveTodo }) => {
    if (!todo) return <h1>Loading...</h1>

    return (
        <section className="preview">
            task: {todo?.name}
            <button onClick={() => onRemoveTodo(todo._id)}>x</button>
            <Link to={`/todo/edit/${todo._id}`}>Edit</Link>
        </section>
    )
}
