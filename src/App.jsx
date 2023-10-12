import React, { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import ListItemContainer from './components/ListItemContainer/ListItemContainer'
import 'rsuite/dist/rsuite.min.css'


function App() {

  const [data, setData] = useState([]); // Declarar una variable de estado


  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => {
            if (!response.ok) {
              reject('No se pudo obtener la lista de productos');
            }
            return response.json();
          })
          .then(productos => {
            resolve(productos);
          })
          .catch(error => {
            reject(error);
          });
      }, 1500); 
    });
  };

  
  
  /*const obtenerProductos = () => {

    return new Promise((resolve, reject) => {

    const productos = [
      {
        id: '1',
        title: 'Producto 1',
        description: 'Descripción del Producto 1',
        price: 10.99,
        stock: 100,
      },
      {
        id: '2',
        title: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 19.99,
        stock: 50,
      },
      {
        id: '3',
        title: 'Producto 3',
        description: 'Descripción del Producto 3',
        price: 7.99,
        stock: 75,
      },
    ];

      setTimeout(() => {
        resolve(productos);
      }, 2000)

    });
    }*/
    
    // uso useEffect para que el llamado solo se efectue en el montaje (una vez)
    useEffect(() => {    
      obtenerProductos().then( datos => {
        console.log(datos)
        setData(datos);
      } )
    }, [])
    
    
  return (
    <>
      <div>
        <Menu/>
        {
          <ListItemContainer title={'Bienvenidos'} productos={data} />
        }
      </div>
    </>
  )
}

export default App
