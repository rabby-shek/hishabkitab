import React from 'react';
import './card.css'
import { MdCompareArrows } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { getdata } from './Custom_card_data'


const Card = (props) => {

    let Data = getdata();


    return (
        <div className='container custom_card'>
         <div className='row'>
                <h2>Featured products</h2>

            </div>
            <div className='row'>
           {
                Data.map(card_info => {
                    return (
                        


<div className='col-lg-3 col-md-4 mb-3'>
    <div className='product-box'>
        <div className='product-inner-box position-relative'>
            <div className='icons position-absolute'>
                <a href="#" className='text-decoration-none text-dark'><AiFillHeart /></a>
                <a href="#" className='text-decoration-none text-dark'><MdCompareArrows /></a>
                <a href="#" className='text-decoration-none text-dark'><AiFillEye /></a>


            </div>
            <div className='onsale'>
                <span className='badge rounded-0'><FaLongArrowAltDown />{card_info.sale}</span>

            </div>
            <img src={card_info.photo} alt="photo" className='img-fluid' />
            <div className='cart-btn'>
                <button className='shadow-sm rounded-pill'><BsFillCartFill />Add to cart</button>

            </div>

        </div>
        <div className=' container product-info'>
            <div className='product-name'>
                <h3>{card_info.productName}</h3>

            </div>
            <div className='product-price'>
                $<span>{card_info.productPrice}</span>

            </div>
            <div className='product-description'>
                {card_info.ProductDescription}
                <br />
                <button> Read More...</button>

            </div>


        </div>
    </div>

</div>




                    )
                })
            }
            </div>
           
          



        </div>
    )

}
export default Card;