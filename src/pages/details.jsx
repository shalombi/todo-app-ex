import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { todoService } from '../services/todo.service'


export const Details = () => {

    const navigate = useNavigate()
    const params = useParams()

    const [todo, setTodo] = useState('')

    useEffect(() => {
        loadTodo()
    }, [])


    const loadTodo = async () => {
        const id = params.id
        if (id) {
            const loadedTodo = await todoService.getById(id)
            console.log('loadedTodo', loadedTodo)
            setTodo({ ...loadedTodo })

        }
    }

    const onBack = () => {
        navigate('/todo')
    }
    if (!todo) return <h2>Loading...</h2>
    return (
        <div>
            <h1>Details</h1>
            <h3>name: {todo.name}</h3>
            <button onClick={onBack}>Back</button>
        </div>
    )
}

