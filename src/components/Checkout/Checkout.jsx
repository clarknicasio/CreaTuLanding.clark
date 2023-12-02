import React, { useState, useContext } from "react"
import { addDoc, collection, getFirestore, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore"
import { CartContext } from '../context/CartContext'
import { Container, Content } from 'rsuite'
import { Link } from 'react-router-dom'
import "./Checkout.css"


const Checkout = () => {
  const { cartList, removeList, totalOrder } = useContext(CartContext)
  const [porder, setPorder] = useState("");
  const [inputValues, setInputValues] = useState({
    nombre: "",
    telefono: "",
    email: "",
    domicilio: "",
  })

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setInputValues({ ...inputValues, [name]: value })
  }

  const saveOrder = (e) => {
    console.log('Guardo orden de compra en DB')
    e.preventDefault()
    const db = getFirestore()
    const collectionRef = collection(db,'orders')
    const itemsCollection = collection(db, 'items');


    addDoc(collectionRef, {
      items: cartList,
      fecha: serverTimestamp(),
      total: totalOrder(),
      cliente:{ ...inputValues },
    })
    
    .then((resultado) => {
      setPorder(resultado.id)
      
      return Promise.all(
        cartList.map((product) => {
          const itemRef = doc(itemsCollection, product.id)
          return getDoc(itemRef).then((itemDoc) => {
            if (itemDoc.exists()) {
              const currentItem = itemDoc.data()
              const updatedStock = currentItem.stock - product.quantity
              return updateDoc(itemRef, { stock: updatedStock })
            } else {
              console.error('El producto no existe.')
              return null
            }
          })
        })
      )
 
    })

    .then(() => {
      removeList();
    })
    .catch((error) => {
      console.error('Error al guardar la orden:', error);
    });

  }


  if (porder) {  
    return (
        <div>
            <h3 className="mBottom10"> Recibimos tu orden de compra</h3>
            <p>Tu orden de compra fue generada correctamente. En breve nos contactaremos contigo.</p>
            <hr/>            
            <p> Código de seguimiento: <b>{porder} </b></p>
            <hr/>            
            <Link className='rs-btn' to='/' >Volver al catálogo</Link>
        </div>
    )
  }


  if (cartList.length === 0) {
    return (
      <div>
        <p>No hay elementos en el carrito</p>
        <hr/>
        <Link className='rs-btn' to='/' >Volver al catálogo</Link>
      </div>
    );
  }

 
  return (

    <div className="show-container">

        <Container>

            <h2 className="pageTitle mBottom10">Detalle el pedido:  </h2>    

            <Content>    
    
                <table>
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td> ${item.price}</td>
                        <td> {item.quantity}</td>
                    </tr>
                    ))}
                </tbody>
                </table>

                <h4>Total a pagar: $ {totalOrder()} </h4>

                <hr/>

                <h3 className="mBottom10">Ingresa tus datos:</h3>

                <form onSubmit={saveOrder}>

                <input className="rs-input" 
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleOnChange}
                    required
                />
                <input className="rs-input" 
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                    required
                />
                <input className="rs-input" 
                    name="telefono"
                    type="text"
                    placeholder="Telefono"
                    onChange={handleOnChange}
                    required
                />
                <input className="rs-input mBottom20" 
                    name="domicilio"
                    type="text"
                    placeholder="Domicilio"
                    onChange={handleOnChange}
                    required
                />
                <button className="rs-btn">Confirmar Compra</button>

                </form>

            </Content>

        </Container>
    </div>
  );
};


export default Checkout;