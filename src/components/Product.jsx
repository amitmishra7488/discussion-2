import React, { useContext, useState } from 'react'
import { contextProduct } from '../context/context'


export default function Product() {
    const [qty, setQty] = useState()
    const [data, setData] = useState([
        { id: 1, name: 'BTC', price: 25000, quantity: 1 },
        { id: 2, name: 'DOGE', price: 0.75, quantity: 1 },
        { id: 3, name: 'RIPPLE', price: 1.5, quantity: 1 }
    ])

    const { updateCart } = useContext(contextProduct)

    console.log(data);



    const handleCart = (el) => {
        el.quantity = qty;
        updateCart(el);
    }

    return (
        <div>
            <h2 className='heading'>Crypto Mart</h2>
            <div className='card-box'>
                {
                    data.map(el =>

                        <div key={el.id.toString()}>
                            <p>{el.name}</p>
                            <p>{'$' + el.price}</p>
                            <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />

                            <button onClick={() => handleCart(el)}>ADD</button>
                        </div>

                    )}
            </div>
        </div>
    )
}
