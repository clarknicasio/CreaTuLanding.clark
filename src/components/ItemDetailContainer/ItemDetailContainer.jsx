import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { appFirestore } from '../../main.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom' 

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  
  useEffect(() => {
    const db = getFirestore(appFirestore)
    const queryRef = collection(db, 'items')
    const querySnapshot = query(queryRef, where('id', '==', itemId))

    getDocs(querySnapshot)
  .then((snapshot) => {
    if (snapshot.size > 0) {
      snapshot.forEach((doc) => {
        const productData = { id: doc.id, ...doc.data() }
        setProduct(productData)
        console.log(productData)
      })
    } else {
      console.log('Item no encontrado.')
    }
  })
  .catch((error) => {
    console.error('Error al obtener el producto:', error)
  })
  }, [itemId])
  
  
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer