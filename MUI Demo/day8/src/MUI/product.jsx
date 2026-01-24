import React from 'react'
import { Box, TextField, Typography,Button } from '@mui/material'
import ProductCard from './components/ProductCard'

export default function product() {
    const [products, setProducts] = React.useState({
        pname:"",
        pprice:0,
        pcategory:"",
        pimageUrl:""
    })
    const [allProducts, setAllProducts] = React.useState([])
    const handleSubmit= ()=>{
        if(products.pname===""||products.pprice===0||products.pcategory===""||products.pimageUrl===""){
            alert("Please fill all the fields")
        }
        else if(products.pprice<0){
            alert("Price cannot be negative")
        }
        else{
        setAllProducts([...allProducts,products])
        console.log(products)
        setProducts({
            pname:"",
            pprice:0,
            pcategory:"",
            pimageUrl:""
        })
        alert("Data Submitted Successfully")
        }
    }


  return (
    <div>
        <Typography variant="h3" sx={{textAlign: 'center'}}>Add Form</Typography>
        <Box>
            <TextField label="Enter Product Name" variant="outlined" sx={{m:1}} onChange={(e)=>setProducts({...products,pname:e.target.value})} value={products.pname} /><br/>
            <TextField label="Enter Product Price" variant="outlined" sx={{m:1}} onChange={(e)=>setProducts({...products,pprice:e.target.value})} value={products.pprice} type="number"/><br/>
            <TextField label="Enter Product Category" variant="outlined" sx={{m:1}} onChange={(e)=>setProducts({...products,pcategory:e.target.value})} value={products.pcategory}/><br/>
            <TextField label="Enter Product Image url" variant="outlined" sx={{m:1}} onChange={(e)=>setProducts({...products,pimageUrl:e.target.value})} value={products.pimageUrl}/><br/>
            <Button onClick={handleSubmit} variant="contained" sx={{m:1,p:1}}>Add Products</Button>
        </Box>
        <Box>
            <ProductCard  allProducts={allProducts} />
        </Box>
        
    </div>
  )
}