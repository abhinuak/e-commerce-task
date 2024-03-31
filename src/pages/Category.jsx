import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
     
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryId]);

  

  return (
    <Row style={{margin:"10px", marginTop:"100px"}} >
    <h2 className='text-center text-info fw-bold'>This Category Inside</h2>
   <Col></Col>
    <Col sm={12} md={6} lg={4} xl={8}>
    {products.map(product => (
    <Card className='m-1' style={{ width: '21rem' }}>
      <Card.Body>
        <Card.Title className='text-black fw-bold text-center'>{product.title}</Card.Title>
        <div className="d-flex justify-content-center align-items-center">
        <Card.Subtitle className="mb-2 text-muted"><img src={product.images} width={200} height={200} alt="" /></Card.Subtitle>
  </div>
        <Card.Text className='text-center'>
        <b >Price: ${product.price}</b>
        </Card.Text>
        <button className='btn btn-warning'>Add to Cart</button>
      </Card.Body>
    </Card>
 ))}
 </Col>

 </Row>
  );
};

export default Category;