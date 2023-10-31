const productos = [
  {
    id: '1',
    title: 'Samsung Galaxy A24',
    description: 'Samsung Galaxy A24',
    category: 'Celulares',
    thumbnail: '/src/assets/images/70011339.webp',
    price: 10.99,
    stock: 100,
  },
  {
    id: '2',
    title: 'Samsung Galaxy A04',
    description: 'Samsung Galaxy A04',
    category: 'Celulares',    
    thumbnail: '/src/assets/images/70010722.webp',    
    price: 19.99,
    stock: 50,
  },
  {
    id: '3',
    title: 'Samsung Galaxy A14',
    description: 'Samsung Galaxy A14',
    category: 'Celulares',   
    thumbnail: '/src/assets/images/70011387.webp',    
    price: 7.99,
    stock: 75,
  },

  {
    id: '4',
    title: 'Moto Verbe Buds 100 Bluetooth',
    description: 'Descripción del Producto 1',
    category: 'Auriculares',
    thumbnail: '/src/assets/images/7003414.jpg',
    price: 10.99,
    stock: 100,
  },
  {
    id: '5',
    title: 'Dekkin 047 con cable',
    description: 'Descripción del Producto 2',
    category: 'Auriculares',    
    thumbnail: '/src/assets/images/7005589.webp',    
    price: 19.99,
    stock: 50,
  },
  {
    id: '6',
    title: 'Moto Pulse 120 con cable',
    description: 'Descripción del Producto 3',
    category: 'Auriculares',   
    thumbnail: '/src/assets/images/7003415.jpg',    
    price: 7.99,
    stock: 75,
  },

  {
    id: '7',
    title: 'Moto Watch 100',
    description: 'Descripción del Producto 1',
    category: 'Smartwatches',
    thumbnail: '/src/assets/images/7004300.webp',
    price: 10.99,
    stock: 100,
  },
  {
    id: '8',
    title: 'Samsung Galaxy Watch Pro 45mm',
    description: 'Descripción del Producto 2',
    category: 'Smartwatches',    
    thumbnail: '/src/assets/images/7004811.webp',    
    price: 19.99,
    stock: 50,
  },
  {
    id: '9',
    title: 'Moto Watch 70',
    description: 'Descripción del Producto 3',
    category: 'Smartwatches',   
    thumbnail: '/src/assets/images/7005428.webp',    
    price: 7.99,
    stock: 75,
  },

];

export const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500)
  });
}

/*const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000)
    });
    }*/

  
  
  /*export const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/products')
          .then(response => {
            if (!response.ok) {
              reject('No se pudo obtener la lista de productos');
            }
            return response.json();
          })
          .then(data => {
            const productos = data.products;
            if (!productos) {
              reject('La respuesta no contiene una lista de productos válida');
            } else {
              resolve(productos);
            }
          })
          .catch(error => {
            reject(error);
          });
      }, 1000);
    });
  };*/


  export const getProductById = (productId) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(prod => prod.id === productId))
      },500)

    })

  }

  export const getProductsByCategory = (categoryId) => {
  
    return new Promise((resolve) => {
      setTimeout(() => {
        /*resolve(productos.find(prod => prod.category === categoryId))*/
        resolve(productos.filter(prod => prod.category === categoryId));
      },500)

    })

  }  