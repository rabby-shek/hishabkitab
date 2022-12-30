import React,{useState} from 'react'
import './menu.css'
import {GiSelfLove} from 'react-icons/gi';
import {FaDraftingCompass} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
const Menu = (props) => {


  const closeMenu = () =>{
    props.handleClose();
 
  }
  return (
    <div className='menu_1'>
        
      <ul>
            <li>
              <a href="#" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#"  onClick={closeMenu}>Shop</a>
            </li>
            <li>
              <a href="#blog"  onClick={closeMenu}> Blog</a>
            </li>
            <li>
              <a href="#"  onClick={closeMenu}>portfolio</a>
            </li>
            <li>
              <a href="#aboutus" onClick={closeMenu}>about us</a>
            </li>
            <li>
              <a href="#"  onClick={closeMenu}>contact us</a>
            </li>
            <li>
              <a href="#"  onClick={closeMenu}><span style={
                {
                    marginRight : "10px"
                }
              }><GiSelfLove /></span>wishlist</a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}><span  style={
                {
                    marginRight : "10px"
                }
            }
              ><FaDraftingCompass /></span>compare</a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}><span  style={
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