import React, { useContext, useState } from 'react'
import './card.css'
import { MdCompareArrows } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import {shopContext} from '../context/Shop_context';

const ItemCard = (props) =>{
   const {addTocart , cartItems, addToCompare} = useContext(shopContext);
   const {id, sale, photo,productName,productPrice,ProductDescription} = props.item;

   const cardCount = cartItems[props.id];
    return (
        <>
         <div className='col-lg-3 col-md-4 mb-3'>     
                        <div className='product-box'>
                            <div className='product-inner-box position-relative'>
                                <div className='icons position-absolute'>
                                    <button href="#" className='text-decoration-none text-dark'><AiFillHeart /></button>
                                    <button href="#" className='text-decoration-none text-dark' onClick={() => addToCompare(id)}><MdCompareArrows /></button>
                                    <button href="#" className='text-decoration-none text-dark'><AiFillEye /></button>

                                </div>
                                <div className='onsale'>
                                    <span className='badge rounded-0'><FaLongArrowAltDown />{sale}</span>

                                </div>
                                <img src={photo} alt="photo" className='img-fluid' />
                                <div className='cart-btn'>
                                    <button className='shadow-sm rounded-pill' onClick={() => addTocart(id)}><BsFillCartFill />Add to cart</button>

                                </div>

                            </div>
                            <div className=' container product-info'>
                                <div className='product-name'>
                                    <h3>{productName}</h3>

                                </div>
                                <div className='product-price'>
                                    $<span>{productPrice}</span>

                                </div>
                                <div className='product-description'>
                                    {ProductDescription}
                                    <br />
                                    <button> Read More...</button>

                                </div>


                            </div>
                        </div>

                    </div>

        </>


    )
}

export default ItemCard;