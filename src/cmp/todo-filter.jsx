import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { todoService } from '../services/todo.service'


export const TodoFilter = ({ onChangeFilter }) => {

    const [filterBy, setFilterBy] = useState({ name: '' })

    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        setFilterBy({ ...filterBy, [field]: value })
    }

    const onFilterBy = (ev) => {
        ev.preventDefault()
        onChangeFilter(filterBy)
    }

    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={onFilterBy} action="">
                <input value={filterBy.name} name="name" type="text" onChange={handleChange} placeholder="task" />
                <button>filterBy</button>
            </form>

        </div>
    )
}

