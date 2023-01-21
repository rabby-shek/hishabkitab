import React, { useContext, useState } from 'react'
import './card.css'
import { MdCompareArrows } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import {shopContext} from '../context/Shop_context';

const ItemCard = (props) =>{
   const {addTocart} = useContext(shopContext);
   const {id} = props.
    return (
        <>
         <div className='col-lg-3 col-md-4 mb-3'>     
                        <div className='product-box'>
                            <div className='product-inner-box position-relative'>
                                <div className='icons position-absolute'>
                                    <a href="#" className='text-decoration-none text-dark'><AiFillHeart /></a>
                                    <a href="#" className='text-decoration-none text-dark'><MdCompareArrows /></a>
                                    <a href="#" className='text-decoration-none text-dark'><AiFillEye /></a>

                                </div>
                                <div className='onsale'>
                                    <span className='badge rounded-0'><FaLongArrowAltDown />{props.sale}</span>

                                </div>
                                <img src={props.photo} alt="photo" className='img-fluid' />
                                <div className='cart-btn'>
                                    <button className='shadow-sm rounded-pill' onClick={() => addTocart(props.id)}><BsFillCartFill />Add to cart</button>

                                </div>

                            </div>
                            <div className=' container product-info'>
                                <div className='product-name'>
                                    <h3>{props.name}</h3>

                                </div>
                                <div className='product-price'>
                                    $<span>{props.price}</span>

                                </div>
                                <div className='product-description'>
                                    {props.des}
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