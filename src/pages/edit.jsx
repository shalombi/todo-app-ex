import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { todoService } from '../services/todo.service'


export const Edit = () => {
    // const [robot, handleChange, setTodo] = useForm(todoService.getEmptyTodo())
    const navigate = useNavigate()
    const params = useParams()

    const [todo, setTodo] = useState({ ...todoService.getEmptyTodo(), name: '' })

    useEffect(() => {
        loadTodo()
    }, [])
    
    
    const loadTodo = async () => {
        const id = params.id
        if (id) {
            const loadedTodo = await todoService.getById(id)
            console.log('loadedTodo',loadedTodo)
            setTodo({ ...loadedTodo })

        }
    }
    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        setTodo({ ...todo, [field]: value })
    }

    const onSaveTodo = async (ev) => {
        ev.preventDefault()
        try {
            await todoService.save({ ...todo })
            navigate('/todo')
        } catch (err) {
            console.log('err:', err)
        }
    }
    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={onSaveTodo} action="">
                <input value={todo.name} name="name" type="text" onChange={handleChange} placeholder="task" />
                <button>save</button>
            </form>

        </div>
    )
}

