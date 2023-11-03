import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncFunciones'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom' 

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    
    getProductById(itemId)
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })

  }, [itemId])
  
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer