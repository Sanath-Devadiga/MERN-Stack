import React from 'react'
import {useState} from 'react'
export default function Form() {
    const [userData,setUserData] = React.useState({
        name:"", 
        place:""  
    })

    const [allData,setAllData] = React.useState([])
    const handleSubmit = ()=>{
        setAllData([...allData,userData])
        console.log(allData);
        setUserData({
            name: "",
            place: ""
        })
    }

  return (
    <div>
        <input type="text" placeholder='Enter your name'
        onChange={(e)=> setUserData({...userData,name : e.target.value})} value={userData.name}/>
        <br></br>
        <input type="text" placeholder='Enter place'
        onChange={(e)=> setUserData({...userData,place : e.target.value})} value={userData.place}/><br/>
        <button onClick={handleSubmit}>submit</button><br/>
        <div>
            <table border={3}>
                <tr>
                    <th>sl no</th>
                    <th>Name</th>
                    <th>Place</th>
                </tr>
                {allData.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.place}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    </div>
  )
}
