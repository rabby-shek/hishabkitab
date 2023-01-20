<<<<<<< HEAD
import React from "react";

const Cart = () =>{
    return(
        <>
            this is a cart
        </>
    )

=======
import React from 'react'
import { CartProvider } from 'react-use-cart';
import { useCart } from 'react-use-cart';

const Cart = () =>{
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if(isEmpty) return <h1>your Cart is empty</h1>
    return(
        <>
        <CartProvider>
            <section>
                <h1>Cart items </h1>
                <p>you have ({totalItems}) in your cart</p>

            </section>

        </CartProvider>
      
        </>
    )
>>>>>>> 8a4bcae094128bbfb8e234d895f4d4e3d1914cdc
}

export default Cart