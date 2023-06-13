import React, { useContext, useEffect, useState } from 'react'
import { contextProduct } from '../context/context'

export default function Cart() {
    const [total, setTotal] = useState(0);


    const { cart } = useContext(contextProduct)
    useEffect(() => {
        let newTotal = 0;
        cart.forEach((item) => {
            newTotal += item.price * item.quantity;
        });
        setTotal(newTotal);
    }, [cart]);
    return (
        <div>
            <h1 className='heading'>MY CART</h1>
            <div className='cart-container'>
                {cart.length > 0 ?
                    cart.map(el =>

                        <div key={el.id.toString()} className='cart-card'>
                            <p>Coin: {el.name}</p>
                            <p>Price: {'$' + el.price}</p>
                            <p>Quantity: {el.quantity}</p>
                        </div>

                    )

                    :
                    <h1 className='heading'>Cart is empty</h1>
                }
            </div>
            {total != 0 ? <h2 className='heading'>Total:${total}</h2> : null}
        </div>
    )
}
