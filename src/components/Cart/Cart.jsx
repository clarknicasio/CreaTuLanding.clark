import React, { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/CartContext'
import  CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import "./Cart.css"
//import { Table } from 'rsuite'

const Cart = () => {

    const { cartList } = useContext(CartContext)
    const { removeList } = useContext(CartContext)
    const { totalOrder } = useContext(CartContext)
    const [productsCart, setProductsCart] = useState([])

    useEffect(() => {
        setProductsCart(cartList.map((item) => 
          <CartItem item={item} key={item.id}/>)
        ) 
      }, [cartList])
    
    return (
        <>
            <h2>Su carrito</h2>
            {productsCart.length > 0 ? (
                <div>
                <table className>
                    <thead>
                        <tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th></tr>
                    </thead>
                    <tbody>
                    {productsCart}
                    </tbody>
                </table>
                <p className="lblTotals">Total compra: ${totalOrder().toFixed(2)}</p>
                <hr/>
                <Button className='rs-btn' onClick={removeList}>Vaciar carrito</Button>
                <Link className='rs-btn' to='/' >Seguir comprando</Link>
                <Link className='rs-btn' to='/checkout' >Finalizar compra</Link>
                </div>
            ) : (
                <div>
                <p>No hay elementos en el carrito</p>
                <hr/>
                <Link className='rs-btn' to='/' >Ir al catálogo</Link>
                </div>
            )}
        </>
    );
  
}

export default Cart