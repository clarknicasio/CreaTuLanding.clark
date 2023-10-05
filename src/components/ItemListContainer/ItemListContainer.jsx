import { Container, Header, Content, Footer } from 'rsuite'

const ItemListContainer = ({title}) => {
  return (
    <div className="show-container">
    <Container>

      <Header>
        <h1>{title}</h1>
      </Header>

      <Content>
        Aquí va la grilla de productos
      </Content>

      <Footer></Footer>

    </Container>
    </div>
  )
}

export default ItemListContainer