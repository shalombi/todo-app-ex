import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { setPlayer } from '../store/todo.actions.js'


export const UserName = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currPlayer, setCurrPlayer] = useState({ score: 100, name: '', isPlayerSaved: false })


    const handleChange = (ev) => {
        const value = typeof ev.target.value === 'number' ? +ev.target.value : ev.target.value
        const field = ev.target.name

        console.log('value, field', value, field)
        setCurrPlayer({ ...currPlayer, [field]: value })
    }

    const onSave = (ev) => {
        ev.preventDefault()
        console.log('save')
        if (!currPlayer.name) {
            alert('Please enter your name')
            return
        }
        setCurrPlayer(currPlayer => ({ ...currPlayer, isPlayerSaved: true }))
        // dispatch(setPlayer(currPlayer))
        // navigate('/game')
    }

    return (
        <div>
            {currPlayer.isPlayerSaved && <h3>user name: {currPlayer.name}</h3>}
            {!currPlayer.isPlayerSaved && <form onSubmit={onSave}>
                <input onChange={handleChange} value={currPlayer.name} type="text" name='name' placeholder='Enter your name' />
                <button>save</button>
            </form>}
        </div>
    )
}

