import React, { useState } from 'react'
import api from '../utils/api'

function AddFriend(props) {
    console.log(props, "<- AddFriend props")
    const [newFriend, addNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        addNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
            .post('/friends', newFriend)
            .then(res => {
                addNewFriend({
                    ...newFriend,
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

return (
        <div className='friendform'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    value={newFriend.name}
                    onChange={handleChange}
                    className='friendform-text'
                />

                <input 
                    type='text' 
                    name='age' 
                    placeholder='Age'
                    value={newFriend.age}
                    onChange={handleChange}
                    className='friendform-text'
                />

                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    value={newFriend.email}
                    onChange={handleChange}
                    className='friendform-text'
                />

                <button type="submit" className='btn btn-dark'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend
