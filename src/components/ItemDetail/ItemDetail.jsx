import { React, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, title, thumbnail, description, category, price, stock}) => {

  const [qtyAdded, setQtyAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    console.log('Cantidad agregada', quantity) 
    setQtyAdded(quantity)
  }

  const pathThumbnail = '../../'+thumbnail

  return (
    <div class="ItemDetail">
        <h2>{title}</h2>
        <img src={pathThumbnail} />
        <p>Descripción: {description}</p>
        <p>Categoría: {category}</p>
        <h4 className='lblPrice'>${price}</h4>
        <p>{stock} unidades disponibles</p>

        {
          qtyAdded > 0 ? (
            <Link className='rs-btn' to='/cart' >Ver carrito</Link>
          ) : (
            <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
          )
        }

    </div>
  )
}

export default ItemDetail