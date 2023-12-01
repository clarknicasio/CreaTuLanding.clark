import { Nav } from 'rsuite'
import CartIcon from '@rsuite/icons/legacy/ShoppingCart'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {

	const {totalQty} = useContext(CartContext)
  
  return totalQty > 0 && (
    <Nav.Item icon={<CartIcon />}>
      <Link to={`/cart`}><span className="hideMobile">Carrito</span>({totalQty})</Link>
    </Nav.Item>
  ) 
}

export default CartWidget