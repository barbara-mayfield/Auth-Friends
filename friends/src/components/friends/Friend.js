import React from 'react'

const Friend = ({ person }) => {
  return (
    <div className='person-card'>
      <h2>{person.name}</h2>
      <h4>Age:</h4><p>{person.age}</p>
      <h4>Email:</h4><p>{person.email}</p>
    </div>
  )
}

export default Friend; 