import React from 'react'
import { Link } from 'react-router-dom'
import { getToken } from '../utils/api'

export default function Nav(props) {
    console.log(props, '<- Nav props')

    const logged = getToken();

    return (
        <div className='navbar bg-dark'>
            <h1>
                <Link exact to='/'><i className={props.logo} /> {props.title}</Link>
            </h1>
            
            <div className='ul'>
                <Link exact to='/' >Home</Link>
				<Link to='/account'>My Account</Link>
                <Link to='/friends'>Friends</Link>
                {!logged && <Link to='/api/login'>Log In</Link>}
				{logged && <Link to='/logout'>Logout</Link>}
            </div>
        </div>
    )
}
