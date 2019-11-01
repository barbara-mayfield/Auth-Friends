import React from 'react'

const Friend = ({ person }) => {
  return (
    <div className='person-card'>
      <h2>{person.name}</h2>
      <p><h4>Age:</h4>{person.age}</p>
      <p><h4>Email:</h4>{person.email}</p>
    </div>
  )
}

export default Friend; 