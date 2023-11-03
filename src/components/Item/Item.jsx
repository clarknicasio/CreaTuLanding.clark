import React from 'react'
import { FlexboxGrid } from 'rsuite'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

    const {id, thumbnail, title, stock, description, price} = producto;

  return (

    <FlexboxGrid.Item colspan={7}>
        <img src={thumbnail} />
        <h5>{title}</h5>
        <h3 className='lblPrice'>${price}</h3>
        <p>{stock} unidades disponibles</p>
        <Link className='rs-btn' to={`/item/${id}`} >Ver más</Link>

    </FlexboxGrid.Item>
  )
}

export default Item