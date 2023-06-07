import React from 'react'

const Person = (person) => {
    // console.log(person)
    const {name, image, age } = person;
  return (
    <div className='article'>
        <img src={image} alt={name} className='img'></img>
        <h3>{name}</h3>
        <p>{age}</p>
    </div>
  )
}

export default Person