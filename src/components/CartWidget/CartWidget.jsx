import { Nav } from 'rsuite'
import CartIcon from '@rsuite/icons/legacy/ShoppingCart'

const CartWidget = () => {
  return (
    <Nav.Item icon={<CartIcon />}>
        Carrito (0)
    </Nav.Item>
  ) 
}

export default CartWidget