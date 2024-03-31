import React, { useEffect, useState } from 'react'
import {  Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SingleProduct() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  return (
   <Row style={{margin:"10px", marginTop:"100px"}}>
    <h1 className='text-center text-info mb-5'>Category List</h1>
    <Col></Col>
<Col sm={12} md={6} lg={4} xl={8}>

    
    {categories.map(category => (
      <div key={category.id} className='border border-black bg-dark p-3 mb-3'>
        <h2 className='text-center'>{category.name}</h2>
        <div className="d-flex justify-content-center align-items-center">
        <img src={category.image} alt={category.name} height={120} width={120} />
  </div>
  <div className="d-flex justify-content-center align-items-center">
  <Link to={`/categories/${category.id}`} className='btn btn-outline-info m-1'>View Products</Link>
  </div>

       
      </div>
    ))}
  
  </Col>
<Col></Col>
   </Row>
  )
}

export default SingleProduct