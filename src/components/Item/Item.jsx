import React from 'react'
import { FlexboxGrid, Button } from 'rsuite'
import './Item.css'

const Item = ({producto}) => {

    const {id, thumbnail, title, stock, description, price} = producto;

  return (

    <FlexboxGrid.Item colspan={7}>
        <img src={thumbnail} />
        <h5>{title}</h5>
        <h3 className='lblPrice'>${price}</h3>
        <p>{stock} unidades disponibles</p>
        <Button>Ver más</Button>

    </FlexboxGrid.Item>
  )
}

export default Item