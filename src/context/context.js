import { createContext, useState } from "react";

export const contextProduct = createContext();


export const ProductProvider = (props)=>{


    const [cart,setCart] = useState([]);

    const updateCart = (el)=>{
        const itemExist = cart.some(item=> el.id===item.id);
        if (itemExist) {
            const updatedCart = cart.map((item) =>
              item.id === el.id ? { ...item, quantity: Number(item.quantity) + Number(el.quantity) } : item
            );
            setCart(updatedCart);
          } else {
            const updatedCart = [...cart, el];
            setCart(updatedCart);
          }
       
    }


    return (

        <contextProduct.Provider value={{cart,updateCart}}>
            {props.children}
        </contextProduct.Provider>
    )


}
export default ProductProvider;