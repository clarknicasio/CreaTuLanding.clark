import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from '../context/CartContext'
import TrashIcon from '@rsuite/icons/Trash';
//import { ProductsContext } from "../../Contexts/ProductsContext";

const CartItem = ({item}) => {

    const subTotal = parseFloat(item.price) * parseFloat(item.quantity)

    //const { addItemCart } = useContext(CartContext); 
    const { deleteItem } = useContext(CartContext); 

    //const { product } = useContext(ProductsContext);
    //const item = product.find( item => item.id === props.item.id);

    return(
        <>
        <tr>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${subTotal}</td>
            <td>
            <button type='button' onClick={() => deleteItem(item.id,item.quantity)}>
                <TrashIcon />
            </button>
            </td>
        </tr>
        </>
    )
}

export default CartItem

