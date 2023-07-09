import React from 'react'


export const Preview = ({ todo ,onRemoveTodo}) => {
    if (!todo) return <h1>Loading...</h1>

    return (
        <section className="preview">
            task: {todo?.name}
            <button onClick={() => onRemoveTodo(todo._id)}>x</button>
        </section>
    )
}
