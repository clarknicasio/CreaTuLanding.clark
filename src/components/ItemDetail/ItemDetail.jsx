import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id, title, thumbnail, description, category, price, stock}) => {

  const pathThumbnail = '../../'+thumbnail

  return (
    <div class="ItemDetail">
        <h2>{title}</h2>
        <img src={pathThumbnail} />
        <p>Descripción: {description}</p>
        <p>Categoría: {category}</p>
        <h4 className='lblPrice'>${price}</h4>
        <p>{stock} unidades disponibles</p>

        <ItemCount initial={1} stock={10} onAdd={ (quantity) => console.log('Cantidad agregada', quantity) } />
    </div>
  )
}

export default ItemDetail