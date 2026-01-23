import React from 'react'
import { useState } from 'react'
export default function Task() {
        const [productData, setProductData] = useState({
        Name:"",
        Price:"",
        Details:"",
        ImageUrl:""
      });

      const [allData,setAllData]= React.useState([])
       const handleSubmit = ()=>{
        setAllData([...allData,productData])
        setProductData({
          Name:"",
          Price:"",
          Details:"",
          ImageUrl:""
        })
       }
        return (
        <div>
          
          <input type="text" placeholder="Product name" 
          onChange= {(e)=>setProductData({...productData, Name:e.target.value})} value = {productData.Name}/><br/>
          <input type="number" placeholder="Price" 
          onChange={(e)=> setProductData({...productData, Price:e.target.value})} value={productData.Price}/><br/>
          <input type="text" placeholder="Product details"
          onChange={(e)=> setProductData ({...productData, Details:e.target.value})} value={productData.Details} /><br/>
          <input type="url" placeholder="Product image url" 
          onChange={(e)=> setProductData({...productData,ImageUrl:e.target.value})} value={productData.ImageUrl}/><br/>
          <button onClick = {handleSubmit}>Add Products</button><br/>

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px"
  }}
>
            {allData.map((item,index)=>(
            <div className="card mt-4" style={{ width: "18rem", display:"flex"}} key ={index}>
            <img 
              src={item.ImageUrl}
              className="card-img-top"
              alt={item.Name}
             style={{height:"300px",
                objectFit:"cover"
             }}/>
            <div className="card-body">
              <h5 className="card-title">{item.Name}</h5>
              <p className="card-text">
                {item.Details}
              </p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
            </div>
         ))}

        </div>
      </div>
  )
}
