import React from 'react'
import { FlexboxGrid } from 'rsuite'
import Item from '../Item/Item.jsx'

const ListItem = ({productos}) => {
  return (
        <FlexboxGrid justify="space-around">
          {productos.map( producto => <Item key={productos.id} producto={producto} />
          )}
        </FlexboxGrid>
  )
}

export default ListItem