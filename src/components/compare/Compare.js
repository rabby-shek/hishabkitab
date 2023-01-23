import React,{useContext} from 'react'
import Navbar from '../navbar'
import New_footer from '../Bootstrap/BT_foter/New_footer'
import FoterTop from '../Bootstrap/foterTop/FoterTop'
import CompareProducts from './CompareProducts'
import { PRODUCTS } from '../custom_card/products'
import {shopContext} from '../context/Shop_context';


const Compare = () => {
  const {compareItems, getTotalCartAmount , getTotalCartItem} = useContext(shopContext);
  return (
    <>
      <Navbar />
      <div className='container'>
    
   

    <div className='row'>
    {
                
                PRODUCTS.map((product) =>{
                    if(compareItems[product.id] !==0)
                    {
        
                        return <CompareProducts  item={product}/>
        
                    }
                   
                   
        
                })
               }
                

    </div>
   
    <New_footer />
</div>
    </>
   
  )
}

export default Compare