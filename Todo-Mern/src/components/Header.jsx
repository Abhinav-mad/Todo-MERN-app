import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-info  shadow rounded">
        <Container>
        <Navbar.Brand> <span className='fw-bold fs-4 text-light '>Todo App</span></Navbar.Brand>
          
        </Container>
      </Navbar>

    </div>
  )
}

export default Header