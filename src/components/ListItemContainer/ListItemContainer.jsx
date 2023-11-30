import React, { useState, useEffect } from 'react'
import { query, where, collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { Container, Header, Content, Footer } from 'rsuite'
//import { obtenerProductos, getProductsByCategory } from '../../asyncFunciones'
import ListItem from '../ListItem/ListItem.jsx'
import { useParams } from 'react-router-dom'
//import Loader from "../Loader/Loader.jsx"
import { appFirestore } from '../../main.jsx'

const ListItemContainer = ({title}) => {

  //const [data, setData] = useState([])
  const [products, setProducts] = useState([])
  //const [loaded, setLoaded] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {    

    const db = getFirestore(appFirestore);
    const ref = doc(db,'items','jFupTJvvL1TGzvAx5jm5');
    const collectionRef = collection(db,'items');
    //const querySnapshot = query(collectionRef, where("price", ">",1));
    
    const querySnapshot = categoryId ?
    query(collectionRef, where('category', '==', categoryId)) :
    collectionRef;
  
    //const asyncFunction = categoryId ? getProductsByCategory : obtenerProductos

    // para traer una coleccion
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
          console.log('Items no encontrados');
        }
      }
      )

    // para traer un documento solo
    /*getDoc(ref).then((snapshot) => {
      if(snapshot.exists()) {
        console.log(snapshot.id,snapshot.data());
      } else {
        console.log('Item no encontrado');
      }
    }

    )*/
      
    /*asyncFunction(categoryId)
      .then(datos => {
        setData(datos)
        setLoaded(true)        
      })
      .catch( error => {
        console.error(error)
      })*/
 
  }, [categoryId])


  return (
    <div className="show-container">

    <Container>

      <Header>
        <h1 style={{ marginTop: '50px', marginBottom: '30px' }}>{categoryId ? categoryId : title }</h1>
      </Header>

      <Content>
        {//loaded ? (
        //<ListItem productos={data} /> 
        <ListItem productos={products} /> 
        /*) : (
          <Loader/>
        )*/}        
      </Content>

      <Footer></Footer>

    </Container>

    </div>
  )
}

export default ListItemContainer




