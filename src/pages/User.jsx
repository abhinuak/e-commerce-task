
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <>
    <div className='mt-5'>.</div>
    <div>
      <h1 className='text-center text-info nfw-bold'>User List</h1>
      <Row>

<Col></Col>
        <Col sm={12} md={6} lg={8} xl={6}>
        {users.map(user => (
        <div key={user.id} className='border m-2 pt-3 pb-3'>
          <h2 className='text-center'>{user.name}</h2>
          <p className='text-center'>Email: {user.email}</p>
          <div className="d-flex justify-content-center align-items-center">
          <img src={user.avatar} width={120} height={120} className='img-fluid' alt={user.name} />
          </div>
        </div>
         ))}
        </Col>
        <Col></Col>
      </Row>
     
     
    </div>
    </>
  );
};

export default UserList;