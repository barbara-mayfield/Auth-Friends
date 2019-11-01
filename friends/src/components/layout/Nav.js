import React from 'react'
import { Route, Link } from 'react-router-dom'
import Signin from './Signin'

export default function Nav(props) {
    console.log(props, '<- Nav props')
    return (
        <div className='navbar bg-dark'>
            <h1>
                <i className={props.logo} /> {props.title}
            </h1>
            
            <div className='ul'>
                <Link to='/'>Home</Link>
                <Link to='/signin'>Sign In</Link>
            </div>

            <Route path='/signin' component={Signin} />
        </div>
    )
}
