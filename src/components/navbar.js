import React, { Component } from "react";
import './navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';

const image = "https://hishabkitab.com/wp-content/uploads/2022/12/HKlogo.svg";

class navbar extends  Component {
    
    
  state = {clicked : false};
  handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
  }
  
render(){
  return (
    
    <>
    <div className="slider">
  
      <nav className="main_nav">
        {/*logo part start here*/}
        <div className="logo">
          <a href="#"></a>
<img src={image} alt="hishabkitab" />
        </div>
        {/*logo part ends here*/}

        {/* navigation menu parts starts here */}
        <div className="menu_links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#"> about us</a>
            </li>
            <li>
              <a href="#">pricing</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
        </div>
        {/* navigation menu parts ends here */}

        {/*get quotes parts starts here*/}
        <div className="get">
        <div className="support">
        <div className="part_1">Need Support</div>
        <p>We are online 24/7</p>

        </div>
        <div className="quote"><a href="#">GET QUOTE</a></div>
       

        </div>
        <div className="side_menu">
        
      <a href="#" className={this.state.clicked ? "#side_bar active":"#side_bar"}><GiHamburgerMenu /></a>
      <p>Menu</p>
      

      </div>
      <div id="side_bar" className="active">
   <div className="top">
   <div>Menu</div>
   <div>categories</div>

   </div>
    
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
              <a href="#">wishlist</a>
            </li>
            <li>
              <a href="#">compare</a>
            </li>
            <li>
              <a href="#">login / resister</a>
            </li>
          </ul>

      </div>
        {/*get quotes parts starts here*/}
      </nav>

      
      </div>



      
    </>
  );
};
}
export default navbar;
