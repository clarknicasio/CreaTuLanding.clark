//import React from 'react'
import { Navbar, Nav } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import CartWidget from '../CartWidget/CartWidget'

const Menu = () => {
  return (
    <Navbar  style={{ position: 'fixed', top: '0', width: '100%',  left: '50%', transform: 'translateX(-50%)' }}>
    <Navbar.Brand href="#"><strong>TIENDA ONLINE</strong></Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Bienvenidos</Nav.Item>
      <Nav.Item>Destacados</Nav.Item>
      <Nav.Item>Productos</Nav.Item>
      <Nav.Item>Contacto</Nav.Item>
    </Nav>
    <Nav pullRight>
      <CartWidget/>
    </Nav>
  </Navbar>
  )
}

export default Menu