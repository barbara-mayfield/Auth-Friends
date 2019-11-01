import React from 'react'
import { Route, Link } from 'react-router-dom'
import Login from '../user/Login'
import Logout from '../user/Logout'

export default function Nav(props) {
    console.log(props, '<- Nav props')

    return (
        <div className='navbar bg-dark'>
            <h1>
                <i className={props.logo} /> {props.title}
            </h1>
            
            <div className='ul'>
                <Link to='/'>Home</Link>
                <Link to="/api/login">Log In</Link>
				<Link to="/api/logout">Log Out</Link>
            </div>

            <Route path='/api/login' component={Login} />
            <Route path='/api/logout' component={Logout} />
        </div>
    )
}
