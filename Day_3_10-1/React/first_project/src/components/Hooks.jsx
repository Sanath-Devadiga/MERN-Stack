import React,{useState} from 'react'
import variables from '../ES/variables'

export default function Hooks() {
    //const name = 'Sanat'
    //const [state,setState] = useState(anyValue)
    //state is a initial value of the variables
    //setState is a function to change the value of the state.
    //seState is a hook which is used to manage the state in functional component.
    //inside useState we can pass any value like string,number,array,object etc.
    //when we update the state the component will re render.
    //
    const[name,setName]= useState('MERN') //initial value will be MERN
    const[number,setNumber]= useState(0) //initial value will be 0
  return (
    <div>
        {name}
        <br/>
        <button onClick = {()=> setName('Mongodb Express React Node')}>
            Change</button>
        <p>{number}</p>
        <button onClick = {()=>setNumber(number-1)}>-</button>
        <button onClick = {()=>setNumber(0)}>0</button>
        <button onClick = {()=>setNumber(number+1)}>+</button>
    </div>

  )
}
