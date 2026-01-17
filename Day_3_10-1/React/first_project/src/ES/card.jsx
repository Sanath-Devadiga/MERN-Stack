import React from 'react'
import Image from '../assets/simpleimg.jpeg'

export default function card({title,category,price,img}) {
    const myStyle = {backgroundColor:'lightblue', 
            height:'280px', 
            width:'200px',
            border:'2px solid black', 
             borderRadius:'10px', 
            color:'black'}
            // internal css in react
  return (
    <div>
        <div style ={myStyle}> 
            <img src = {img} alt ='mobile' style = {{height:'100px', width:'100px', marginTop:'10px'}}/>
            {/* first flower bracket for js and another one for object  */ }
            <h4>{title}</h4>
            <h6>{category}</h6>
            <h6>{price}</h6>
        </div>
     </div>
  )
}
