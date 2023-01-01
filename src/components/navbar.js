import React, { Component } from "react";
import './navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import Test_canvas from "./sideNav/Test_canvas";


const image = "https://hishabkitab.com/wp-content/uploads/2022/12/HKlogo.svg";

const navbar = () =>{
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("newnavbar").style.top = "0";
  } else {
    document.getElementById("newnavbar").style.top = "-250px";
  }
}

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
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#aboutus"> about us</a>
            </li>
            <li>
              <a href="#pricing">pricing</a>
            </li>
            <li>
              <a href="#blog">blog</a>
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
        
      <Test_canvas />
      
      

      </div>
     
        {/*get quotes parts starts here*/}
      </nav>
      <nav className="main_nav" id="newnavbar">
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
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#aboutus"> about us</a>
            </li>
            <li>
              <a href="#pricing">pricing</a>
            </li>
            <li>
              <a href="#blog">blog</a>
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
        
      <Test_canvas />
      
      

      </div>
     
        {/*get quotes parts starts here*/}
      </nav>

      
      </div>



      
    </>
  );

}
export default navbar;
