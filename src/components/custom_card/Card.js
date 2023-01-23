import React, { useState } from 'react';
import './card.css'
import { MdCompareArrows } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { getdata } from './Custom_card_data'
import { PRODUCTS } from './products'
import ItemCard from './ItemCard'



const Card = () => {
    let Data = getdata();




    return (
        <div className='container custom_card'>
            <div className='row bg-dark w-100 text-light mb-5 p-3'>
                <h2>Featured products</h2>

            </div>
            <div className="container text-md-left">

                <div className="row  text-md-left">
                    <div className=" col-md-3 col-lg-3 col-xl-3 mx-auto ">
                 
                      
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto">
                       
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-5">
                         
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    PRODUCTS.map((card_info) =>
                        <ItemCard photo={card_info.photo} sale={card_info.sale} name={card_info.productName} item={card_info} des={card_info.ProductDescription} price={card_info.productPrice} id={card_info.id} />
                    )
                }
            </div>

        </div>
    )

}
export default Card;