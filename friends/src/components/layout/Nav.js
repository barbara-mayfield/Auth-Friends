import React from 'react'

export default function Nav(props) {
    console.log(props, "<- props")
    return (
        <div>
            <h1>
                <i className={props.logo} /> {props.title}
            </h1>
        </div>
    )
}
