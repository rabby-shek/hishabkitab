import React, {useState,createContext} from 'react';
import { PRODUCTS } from '../custom_card/products'



//creating API here
export const shopContext = createContext(null);





//getting the cart length one by one
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
   
  }
  return cart;
};
//cart ends here





//compare starts here
const getDefaultCompare = () => {
  let compare = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    compare[i] = 0;
   
  }
  return compare;
};
//compare ends here





export const Shop_context = (props) => {

  //cart logical parts starts here
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addTocart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.productPrice;
        }
      }
      return totalAmount;
    };
    const getTotalCartItem = () => {
      let totalitem = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalitem += cartItems[item];
        }
      }
      return totalitem;
    };
  
    const removeFromcart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
     
    };

    const removeAllFromcart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId]  }));
   
    };
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    //cart logical parts ends here




    

    //compare logical parts starts here
    const [compareItems, setCompareItems] = useState(getDefaultCompare());

    const getTotalCompareAmount = () => {
      let totalAmount = 0;
      for (const item in compareItems) {
        if (compareItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += compareItems[item] * itemInfo.productPrice;
        }
      }
      return totalAmount;
    };

    const getTotalCompareItem = () => {
      let totalCompareitem = 0;
      for (const item in compareItems) {
        if (compareItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalCompareitem += compareItems[item];
        }
      }
      return totalCompareitem;
    };

    const addToCompare = (itemId) => {
      setCompareItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCompare = (itemId) => {
      setCompareItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    //compare logical parts ends here



    //exporting the functions from here

    const contextValue = 
    {cartItems , compareItems
      , addTocart 
      , removeFromcart 
      , removeAllFromcart 
      , updateCartItemCount 
      , getTotalCartAmount 
      , getTotalCartItem
      , addToCompare
      , removeFromCompare
      , getTotalCompareItem
      , getTotalCompareAmount
    }

    //exporting functions ends here


    console.log(cartItems)
    console.log(PRODUCTS.length)
  
  return (
    <shopContext.Provider value={contextValue}>
    {props.children}


    </shopContext.Provider>
  )
}

