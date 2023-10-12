import React from 'react'
import { Container, Header, Content, FlexboxGrid, Footer } from 'rsuite'
import ListItem from '../ListItem/ListItem.jsx'


const ListItemContainer = ({title, productos}) => {
  return (
    <div className="show-container">

    <Container>

      <Header>
        <h1 style={{ marginTop: '50px' }}>{title}</h1>
      </Header>

      <Content>
        <FlexboxGrid justify="space-around">
          {productos.map( producto => <ListItem key={productos.id} producto={producto} />
          )}
        </FlexboxGrid>
      </Content>

      <Footer></Footer>

    </Container>

    </div>
  )
}

export default ListItemContainer




