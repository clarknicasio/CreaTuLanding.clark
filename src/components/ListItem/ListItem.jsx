import React from 'react'
import { FlexboxGrid } from 'rsuite'


const ListItem = ({producto}) => {

    const {image, title, description, price} = producto;

  return (

    <FlexboxGrid.Item colspan={7}>
        <img src={image} style={{ width: '50px', marginTop: '20px' }} />
        <h4>{title}</h4>
        <h6>Precio: {price}</h6>
        <p>{description}</p>
    </FlexboxGrid.Item>
  )
}

export default ListItem