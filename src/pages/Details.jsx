
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  }, [productId]);
  

  if (!product) {
    return <div className='mt-5'>
      <img className='mt-5' src="https://i.gifer.com/ZKZg.gif" alt="" height={120} width={120} />
    </div>
  }

  return (
    <>
    <div className='mt-5'>.</div>
   <Row className='mt-5'>

    <Col ></Col>
    <Col sm={12} md={6} lg={8} xl={8} >
     <div className='border bg-dark p-3'>
    
      <h2 className='text-center text-info fw-bold mb-3'>{product.title}</h2>
      <p className='text-center'> <b className='text-info'>Description:</b> {product.description}</p>
      
      <img src={product.images} alt='' className='img-fluid' width={'100%'} height={200} />
      <p className='fs-2 text-center'> <b>Price: ${product.price}</b></p>
     <div className="d-flex justify-content-center align-item-center mt-3">
     <button className='btn btn-warning'>Add to Cart</button>
     </div>
    </div></Col>
    <Col ></Col>
   </Row>
   </>
  );
};

export default Details;