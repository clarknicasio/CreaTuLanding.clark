import { createContext, useState } from "react";

export const CartContext = createContext({ cartList: [] });

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalQty, setTotalQty] = useState(0);

    const isInCart = (item_id) => {
        return cartList.some(prod => prod.id === item_id)
    }

    const addToCart = (item, quantity) => {  
		if (!isInCart(item.id)) {
            console.log('agrego al carrito')                 
            setTotalQty(parseInt(totalQty, 10) + parseInt(quantity, 10))   
            return setCartList(chkitem => [...chkitem, { ...item, quantity }])
        }
        else {     
            console.error('Este producto ya está en la lista, no se agrega.')	
		}
    }

    const removeList = () => {	
        setCartList([])		
        setTotalQty(0)   
    }

    const deleteItem = (itemId,quantity) => {	
        setTotalQty(parseInt(totalQty, 10) - parseInt(quantity, 10)) 
        setCartList(cartList.filter(item => (item.id !== itemId)))    
        console.log('Se borra item.')       
    }

    const totalOrder = () => {
    return cartList.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0
    )
    }
    
    return (
        <CartContext.Provider value={{totalQty, cartList, addToCart, removeList, deleteItem, totalOrder, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}

