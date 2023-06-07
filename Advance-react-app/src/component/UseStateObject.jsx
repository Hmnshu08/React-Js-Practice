import React, { useState } from 'react'

const UseStateObject = () => {
    // const [name,setName] = useState('Sam');
    // const [age,setAge] = useState(24);
    // const [hobby,setHobby] = useState('Watching Movies');

    const [person,setPerson] = useState({
        name : 'sam',
        age : 24,
        hobby : 'Watching Movies'
    })

    const {name,age,hobby} = person;
    const valueChange = () =>{
        setPerson({
            name : 'John',
            age : 27,
            hobby : 'Drawing'
        })
        // setName('John');
        // setAge(27);
        // setHobby('Drawing');

        // setPerson({...person, name:'OKay'})
    }
    return (
    <div>
        <h2>UseStateObject Example</h2>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>Hobby: {hobby}</h2>
        <button type='btn' onClick={valueChange}>Change</button>
    </div>
  )
}

export default UseStateObject