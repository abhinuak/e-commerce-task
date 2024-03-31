import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Products() {

    const [products,setProducts]=useState([])


    
    const base_Url='https://api.escuelajs.co/api/v1/products'

    const fetchData= async()=>{
        const response=await axios.get(base_Url)
        console.log(response.data);
        setProducts(response.data);
    }

useEffect(()=>{
  fetchData()
},[])

  return (
    <>
    <Row style={{margin:"10px", marginTop:"100px"}} >
    <div>
       <h1 className='text-center text-info fw-bolder'><u>PRODUCT LIST</u></h1>
  
    </div>
    {products.map(product => (
    <Card className='m-1' style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title className='text-black fw-bold'>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        <b>Price: ${product.price}</b>
        </Card.Text>
        <Link to={`/products/${product.id}`} className='btn btn-info me-2'>View Details</Link>
        <button className='btn btn-warning'>Add to Cart</button>
      </Card.Body>
    </Card>
 ))}
 </Row>
    </>
  )
}

export default Products

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://api.escuelajs.co/api/v1/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//    
//   );
// };

// export default ProductList;