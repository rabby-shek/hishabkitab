import React from 'react';
import './card.css'
import { MdCompareArrows } from 'react-icons/md';

const Card = () => {
    return (
        <div className='custom_card'>
            <div className='custom_card_box'>
                <div className='card_image'>
                    <img src='https://i0.wp.com/hishabkitab.com/wp-content/uploads/2021/07/ornare-auctor-1.jpg?fit=700%2C800&ssl=1' />

                </div>
                <div>
                    compare
                    </div>



                <h3>card title</h3>
                <div className="custom_card_body">
                    the name of our country is bangladesh. there are many problem in our country.
                    wee need try to solve them.

                </div>


            </div>


        </div>
    )

}
export default Card;