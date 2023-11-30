import { createContext, useState } from "react";

export const CartContext = createContext({ cartList: [] });

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    //const [addQty, setAddQty] = useState(0);

    const isInCart = (item_id) => {
        return cartList.some(prod => prod.id === item_id)
    }

    const addToCart = (item, quantity) => {  //implementa la funcionalidad para agregar un producto al carrito
		if (!isInCart(item.id)) {
            console.log('agrego al carrito')                 
            setTotalQty(parseInt(totalQty, 10) + parseInt(quantity, 10))   
            //setAddQty(quantity)   
            return setCartList(chkitem => [...chkitem, { ...item, quantity }])
        }
        else {
            //setAddQty(0)               
            console.error('Este producto ya está en la lista, no se agrega.');		
		}
    }

    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
        setCartList([])		
        setTotalQty(0)   
    }

    const deleteItem = (itemId,quantity) => {	//implementa la funcionalidad para borrar un producto del carrito
        setTotalQty(parseInt(totalQty, 10) - parseInt(quantity, 10)) 
        setCartList(cartList.filter(item => (item.id !== itemId)))    
        console.log('se borra item')       
    }

    const totalOrder = () => {
    return cartList.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0
    );
    };
    
    return (
        <CartContext.Provider value={{totalQty, cartList, addToCart, removeList, deleteItem, totalOrder, isInCart}}>
            { children }
        </CartContext.Provider>
    );
}

