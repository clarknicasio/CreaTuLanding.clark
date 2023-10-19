//import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById, obtenerProductos } from '../../asyncFunc'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)

  useEffect(() => {

    obtenerProductos()
    
    getProductById('1')
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })

  }, [])
  
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer