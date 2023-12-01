import React, { useState, useEffect } from 'react'
import { query, where, collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import './App.css'
//import { obtenerProductos } from './asyncFunciones'
import Menu from './components/Menu/Menu'
import ListItemContainer from './components/ListItemContainer/ListItemContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Loader from './components/Loader/Loader'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import 'rsuite/dist/rsuite.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { appFirestore } from './main'
import { CartContextProvider  } from './components/context/CartContext'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(  () => {
    const db = getFirestore(appFirestore);
    const ref = doc(db,'items','jFupTJvvL1TGzvAx5jm5');
    const collectionRef = collection(db,'items');
    const querySnapshot = query(collectionRef, where("price", ">",50));

    // para traer una coleccion
    //getDocs(querySnapshot).then((snapshot) => {
    getDocs(collectionRef).then((snapshot) => {
      if(snapshot.size != 0) {
        const lista = snapshot.docs.map( (doc) => ({
          id: snapshot.id,
          ...doc.data()
        })
        )
        setLoading(false);        
        //setProducts(lista);
        console.log(lista);
      } else {
        console.log('Items no encontrados');
      }
    }
    )


    // para traer un documento solo
    getDoc(ref).then((snapshot) => {
      if(snapshot.exists()) {
        console.log(snapshot.id,snapshot.data());
      } else {
        console.log('Item no encontrado');
      }
    }
    )

  }
  )

  return (
    loading ? <Loader /> :
    <>
      <div>
        <BrowserRouter>
        <CartContextProvider>
          <Menu/>
          {
            <Routes>
            <Route path='/' element={<ListItemContainer title={'Catálogo'}/>}/>
            <Route path='/category/:categoryId' element={<ListItemContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path="*" element={<h4>404 - PAGINA NO ENCONTRADA</h4>} />
            </Routes>
          }
        </CartContextProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
