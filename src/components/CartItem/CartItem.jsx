import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from '../context/CartContext'
import TrashIcon from '@rsuite/icons/Trash'

const CartItem = ({item}) => {

    const subTotal = parseFloat(item.price) * parseFloat(item.quantity)

    const { deleteItem } = useContext(CartContext)

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

