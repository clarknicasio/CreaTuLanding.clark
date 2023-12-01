import { React, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({id, title, thumbnail, description, category, price, stock}) => {

	const { addToCart } = useContext(CartContext)
  const { isInCart } = useContext(CartContext)

  const [qtyAdded, setQtyAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    console.log('Cantidad a agregar', quantity) 
    const item = { id, title, description, category, thumbnail, price, stock }    
		addToCart(item, quantity) 
    setQtyAdded(quantity)
  }

  const pathThumbnail = thumbnail

  return (
    <div class="ItemDetail">
        <h2>{title}</h2>
        <img src={pathThumbnail} />
        <p>Descripción: {description}</p>
        <p>Categoría: {category}</p>
        <h4 className='lblPrice'>${price}</h4>
        <p>{stock} unidades disponibles</p>

        {
          (qtyAdded > 0 ||  isInCart(id)) ? (
            <>
            <hr />
            <Link className='rs-btn' to='/cart' >Ver carrito</Link>
            <Link className='rs-btn' to='/' >Seguir comprando</Link>
            </>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }

    </div>
  )
}

export default ItemDetail