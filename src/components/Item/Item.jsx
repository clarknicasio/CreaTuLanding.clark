import React from 'react'
import { FlexboxGrid } from 'rsuite'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  const {id, thumbnail, title, stock, price} = producto;
    
  return (

    <FlexboxGrid.Item colspan={7}>
        <img src={thumbnail} />
        <h3>{title}</h3>
        <h2 className='lblPrice'>${price}</h2>
        <p>{stock} unidades disponibles</p>
        <Link className='rs-btn' to={`/item/${id}`} >Ver más</Link>

    </FlexboxGrid.Item>
  )
}

export default Item