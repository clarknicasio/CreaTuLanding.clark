import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Footer } from 'rsuite'
import { obtenerProductos, getProductsByCategory } from '../../asyncFunciones'
import ListItem from '../ListItem/ListItem.jsx'
import { useParams } from 'react-router-dom'


const ListItemContainer = ({title}) => {

  const [data, setData] = useState([]); 

  const { categoryId } = useParams()

  useEffect(() => {    

    const asyncFunction = categoryId ? getProductsByCategory : obtenerProductos

    asyncFunction(categoryId)
      .then(datos => {
        setData(datos)
      })
      .catch( error => {
        console.error(error)
      })

  }, [categoryId])


  return (
    <div className="show-container">

    <Container>

      <Header>
        <h1 style={{ marginTop: '50px', marginBottom: '30px' }}>{categoryId ? categoryId : title }</h1>
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




