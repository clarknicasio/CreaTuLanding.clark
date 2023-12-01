import React, { useState } from 'react'
import { Button } from 'rsuite'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if ( quantity<stock ) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if ( quantity>1 ) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="ItemCount">

            <div className='Controls'>
                <Button className='' onClick={decrement}>-</Button>
                <h6 className='countNumber'>{quantity}</h6>
                <Button className='' onClick={increment}>+</Button>                
            </div>
            <Button className='' onClick={ () => onAdd(quantity)} disabled={!stock} >
            Agregar al carrito    
            </Button>       

        </div>
    )
}

export default ItemCount