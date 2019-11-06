import React, { useState } from 'react'
import api from '../utils/api'

export default function Login(props) {

    const [error, setError] = useState()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
			.post('/login', userData)
			.then(res => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/friends')
			})
			.catch(err => {
				setError(err)
			})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    className='input' 
                    name='username' 
                    placeholder='Username'
                    value={userData.username}
                    onChange={handleChange} 
                />
                <input 
                    type='password' 
                    className='input'
                    name='password' 
                    placeholder='Password'
                    value={userData.password}
                    onChange={handleChange} 
                />
            
                <button type='submit' className='btn'>Sign In</button>
            </form>
        </div>
    )
}
