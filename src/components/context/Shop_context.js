import React, {useState,createContext} from 'react'
import { getdata } from '../custom_card/Custom_card_data'
export const shopContext = createContext(null);

const getDefaultCart = () => {
  
    let cart = {};
    for(let i = 1; i < getdata.length + 1 ; i++)
    {
        cart[i] = 0;
    }
    return cart;
}

const Shop_context = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    const addTocart = (itemID) => {
      setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
    }
    const removeFromcart = (itemID) => {
      setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}))
    }

    const contextValue = {cartItems , addTocart , removeFromcart}
    console.log(cartItems)
  
  return (
    <shopContext.Provider value={contextValue}>
    {props.children}


    </shopContext.Provider>
  )
}

export default Shop_context