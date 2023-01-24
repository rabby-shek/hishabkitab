import React,{useContext} from 'react'
import Navbar from '../navbar'
import New_footer from '../Bootstrap/BT_foter/New_footer'
import FoterTop from '../Bootstrap/foterTop/FoterTop'
import CompareProducts from './CompareProducts'
import { PRODUCTS } from '../custom_card/products'
import {shopContext} from '../context/Shop_context';
import './compare.css'


const Compare = () => {
  const {compareItems, getTotalCartAmount , getTotalCartItem, getTotalCompareItem, getTotalCompareAmount} = useContext(shopContext);

  const totalCompareItems = getTotalCompareItem();
  const TotalAmount = getTotalCompareAmount();
  const CheckingCompare = () =>{
    if(totalCompareItems == 0)
    {
      return <h1>You Have no Products to Compare</h1>
    }
    
  }
  
  return (
    <>
      <Navbar />
      <div className='container compare'>
      <div className='row bg-dark w-100 text-light mb-5 p-3'>
                <h2>Your {totalCompareItems} Choosen products</h2>

            </div>
    
   

    <div className='row'>
      <CheckingCompare />
      <p>Total Items  : {totalCompareItems}</p>
      <p>Total Amount : {TotalAmount}</p>
    {
                
                PRODUCTS.map((product) =>{
                    if(compareItems[product.id] !==0)
                    {
        
                        return <CompareProducts  item={product}/>
        
                    }
                   
                   
        
                })
               }
                

    </div>
   
   
</div>
<New_footer />
    </>
   
  )
}

export default Compare