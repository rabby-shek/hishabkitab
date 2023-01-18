import React, {useState} from 'react';
import './card.css'
import { MdCompareArrows } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { getdata } from './Custom_card_data'
import ItemCard from './ItemCard'



const Card = () => {
    const [cardData , setCardData] = useState("")

    let Data = getdata();
   
    


    return (
        <div className='container custom_card'>
            <div className='row'>
                <h2>Featured products</h2>

            </div>
            <div className='row'>
                {
                    Data.map((card_info ,index) =>
                        <ItemCard key={index} photo={card_info.photo} sale={card_info.sale} name={card_info.productName} item={card_info} des={card_info.ProductDescription} price={card_info.productPrice}/>
                        )
                }
            </div>

        </div>
    )

}
export default Card;