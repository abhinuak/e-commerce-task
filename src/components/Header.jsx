import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        
        <Navbar style={{zIndex:"1"}} expand="lg" className="bg-dark position-fixed top-0 w-100 ">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          
          </Navbar.Brand>
        <Navbar.Brand> <Link to={'/'}  style={{color:"white",fontWeight:"bolder",textDecoration:"none"}}>E-Commerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='gap-2'>
          <Link to={'/categories'} className='btn btn-outline-info ms-auto'>Category</Link>
          <Link to={'/users'} className='btn btn-outline-info'>Users</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header