import React from 'react';
import './card.css'
import { AiFillEye } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { MdCompareArrows } from 'react-icons/md';
import { BsFillCartFill } from 'react-icons/bs';



const Card = () => {
    console.log('shop');
    return (
        <div className='custom_card'>
            <div className='container'>
                <div className='row'>

                <h2>Featured Products</h2>
                    <div className='col-md-3'>
                        <div className='product-box'></div>
                        <div className='product-inner-box position-relative'>
                            <div className='icons position-absolute'>
                                <a href='#' className='text-decoration-none text-dark'><FiHeart /></a>
                                <a href='#' className='text-decoration-none text-dark'><AiFillEye /></a>
                                <a href='#' className='text-decoration-none text-dark'><MdCompareArrows /></a>

                            </div>
                            <img src='https://i0.wp.com/hishabkitab.com/wp-content/uploads/2021/07/senectus-tincidunt-1.jpg?fit=430%2C491&ssl=1' alt='light' className='img-fluid'/>
                            <div className='cart-btn'>
                                <button className='btn bg-white shadow-sm rounded-pil'><BsFillCartFill />Add to Cart</button>

                            </div>

                        </div>
                        <div className='product-info'>
                            <div className='product-name'>
                                <h3>Light</h3>
                            </div>
                            <div className='product-price'>
                                $<span>179</span>

                            </div>

                        </div>

                    </div>


                </div>

            </div>


        </div>
    )

}
export default Card;