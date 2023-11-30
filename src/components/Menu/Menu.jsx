import { Navbar, Nav } from 'rsuite'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import './Menu.css'


const Menu = () => {
  return (
    <Navbar  style={{ position: 'fixed', top: '0', width: '100%',  left: '50%', transform: 'translateX(-50%)' }}>
    <Navbar.Brand><Link to={`/`}><h3>REACT SHOP</h3></Link></Navbar.Brand>
    <Nav>
      <Nav.Item className="hideMobile"><Link to={`/`}>Catálogo</Link> </Nav.Item>
      <Nav.Item><Link to={`/category/Celulares`}>Celulares</Link></Nav.Item>
      <Nav.Item><Link to={`/category/Auriculares`}>Auriculares</Link></Nav.Item>
      <Nav.Item><Link to={`/category/Smartwatches`}>SmartWatches</Link></Nav.Item>      
    </Nav>
    <Nav pullRight>
      <CartWidget/>
    </Nav>
    </Navbar>
  )
}

export default Menu