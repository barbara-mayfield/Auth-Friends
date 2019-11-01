import React, { useState, useEffect } from 'react'
import api from '../utils/api'

import Friend from './Friend'
import AddFriend from './AddFriend';

function MyFriends() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        api()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Friends</h1>
            
            <div className='friendlist'>
            {friends.map(friend => 
                <Friend key={friend.id} person={friend} />
            )}
            </div>

            <AddFriend />
        </div>
    )
}

export default MyFriends
