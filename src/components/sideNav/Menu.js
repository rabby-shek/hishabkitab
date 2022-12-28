import React from 'react'
import './menu.css'
import {GiSelfLove} from 'react-icons/gi';
import {FaDraftingCompass} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
const Menu = () => {
  return (
    <div className='menu_1'>
        
      <ul>
            <li>
              <a href="#" >Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#"> Blog</a>
            </li>
            <li>
              <a href="#">portfolio</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
            <li>
              <a href="#"><span style={
                {
                    marginRight : "10px"
                }
              }><GiSelfLove /></span>wishlist</a>
            </li>
            <li>
              <a href="#"><span  style={
                {
                    marginRight : "10px"
                }
            }
              ><FaDraftingCompass /></span>compare</a>
            </li>
            <li>
              <a href="#"><span  style={
                {
                    marginRight : "10px"
                }
            }
              ><AiOutlineUser /></span>login / resister</a>
            </li>
          </ul>
    </div>
  )
}

export default Menu