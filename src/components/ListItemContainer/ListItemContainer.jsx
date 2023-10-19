import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Footer } from 'rsuite'
import { obtenerProductos } from '../../asyncFunc'
import ListItem from '../ListItem/ListItem.jsx'


const ListItemContainer = ({title}) => {

  const [data, setData] = useState([]); // Declarar una variable de estado



  // uso useEffect para que el llamado solo se efectue en el montaje (una vez)
  useEffect(() => {    
    obtenerProductos().then( datos => {
      console.log(datos)
      setData(datos);
    } )
  }, [])


  return (
    <div className="show-container">

    <Container>

      <Header>
        <h1 style={{ marginTop: '50px', marginBottom: '30px' }}>{title}</h1>
      </Header>

      <Content>
        <ListItem productos={data} /> 
      </Content>

      <Footer></Footer>

    </Container>

    </div>
  )
}

export default ListItemContainer




