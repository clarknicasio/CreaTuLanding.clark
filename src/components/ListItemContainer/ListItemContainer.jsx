import React, { useState, useEffect } from 'react'
import { query, where, collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { Container, Header, Content, Footer } from 'rsuite'
import ListItem from '../ListItem/ListItem.jsx'
import { useParams } from 'react-router-dom'
import { appFirestore } from '../../main.jsx'

const ListItemContainer = ({title}) => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {    

    const db = getFirestore(appFirestore)
    const ref = doc(db,'items','jFupTJvvL1TGzvAx5jm5')
    const collectionRef = collection(db,'items')
    
    const querySnapshot = categoryId ?
    query(collectionRef, where('category', '==', categoryId)) :
    collectionRef;
  
    getDocs(querySnapshot).then((snapshot) => {
      if(snapshot.size != 0) {
        const lista = snapshot.docs.map( (doc) => ({
          id: snapshot.id,
          ...doc.data()
        })
        )     
        setProducts(lista);
        console.log(lista);
      } else {
        console.log('Items no encontrados.')
      }
    }
    )
 
  }, [categoryId])


  return (
    <div className="show-container">

    <Container>

      <Header>
        <h1 className="pageTitle" style={{ marginTop: '50px', marginBottom: '30px' }}>{categoryId ? categoryId : title }</h1>
      </Header>

      <Content>
        {
        <ListItem productos={products} /> 
        }        
      </Content>

      <Footer></Footer>

    </Container>

    </div>
  )
}

export default ListItemContainer




