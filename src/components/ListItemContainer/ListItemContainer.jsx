import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Footer } from 'rsuite'
import { obtenerProductos, getProductsByCategory } from '../../asyncFunciones'
import ListItem from '../ListItem/ListItem.jsx'
import { useParams } from 'react-router-dom'


const ListItemContainer = ({title}) => {

  const [data, setData] = useState([]); // Declarar una variable de estado

  const { categoryId } = useParams()

  // uso useEffect para que el llamado solo se efectue en el montaje (una vez)
  useEffect(() => {    

    const asyncFunction = categoryId ? getProductsByCategory : obtenerProductos

    asyncFunction(categoryId)
      .then(datos => {
        setData(datos)
      })
      .catch( error => {
        console.error(error)
      })

    /*obtenerProductos().then( datos => {
      console.log(datos)
      setData(datos);
    } )*/

  }, [categoryId])


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




