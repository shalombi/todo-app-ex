import React from 'react'
import { Preview } from './preview'

export const List = ({ todos, onRemoveTodo }) => {

    return (
        <section className="list">
            {todos?.map(todo => <Preview key={todo._id} onRemoveTodo={onRemoveTodo} todo={todo} />)}
        </section>
    )
}
