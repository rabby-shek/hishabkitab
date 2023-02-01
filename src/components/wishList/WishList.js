import React,{useContext} from 'react'
import Navbar from '../navbar'
import New_footer from '../Bootstrap/BT_foter/New_footer'
import './wishlist.css'
import FoterTop from '../Bootstrap/foterTop/FoterTop'
import WishListProducts from './WishListProducts'
import { PRODUCTS } from '../custom_card/products'
import {shopContext} from '../context/Shop_context';
const WishList = () => {

  const {getTotalWishItem, getTotalCompareAmount, wishItems, getTotalWishAmount} = useContext(shopContext);

  const totalWishItems = getTotalWishItem();
  const TotalAmount = getTotalWishAmount();
  const CheckingWishlist = () =>{
    if(totalWishItems == 0)
    {
      return <h1>You Have no Products to in your wishList</h1>
    }
    
  }
  
  return (
    <div className='wishlist'>
      <Navbar />
      <h1 className="wish">wishList</h1>

      <div className='container compare'>
      <div className='row bg-dark w-100 text-light mb-5 p-3'>
                <h2>Your {totalWishItems} Choosen products</h2>

            </div>
    
   

    <div className='row'>
      <CheckingWishlist />
      <p>Total Items  : {totalWishItems}</p>
      <p>Total Amount : {TotalAmount}</p>
    {
                
                PRODUCTS.map((product) =>{
                    if(wishItems[product.id] !==0)
                    {
        
                        return <WishListProducts  item={product}/>
        
                    }
                   
                   
        
                })
               }
                

    </div>
   
   
</div>
      <New_footer />

    </div>
  )
}

export default WishList;