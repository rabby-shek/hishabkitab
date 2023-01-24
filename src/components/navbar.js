import React, { Component, useRef, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillCartFill } from 'react-icons/bs';
import Test_canvas from "./sideNav/Test_canvas";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { shopContext } from "./context/Shop_context";


const image = "https://hishabkitab.com/wp-content/uploads/2022/12/HKlogo.svg";

const navbar = () => {
 
  
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("newnavbar").style.top = "0";
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("newnavbar").style.top = "-250px";
      document.getElementById("myBtn").style.display = "none";
    
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  

  return (

    <>
      <div className=" slider">
      <div onClick={topFunction} id="myBtn" title="Go to top"><AiOutlineArrowUp /></div>

        <nav className="main_nav">
          {/*logo part start here*/}
          <div className="logo">
            <a href="#"></a>
           <Link to='/'> <img src={image} alt="hishabkitab" /></Link>
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
              <li>
              <Link to="/cart"><BsFillCartFill /></Link>
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
            <Link to='/'> <img src={image} alt="hishabkitab" /></Link>
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
              <li>
              <Link to="/cart"><BsFillCartFill /></Link>
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

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide  id="swip">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  WE Optimize  and Grow Your Bussiness
                </h1>

              </div>
              <div className="col-md-12">
                <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>Websites in professional use tempting systems. Commercial publishing platforms and content management systems ensure that you can show different text, different template data using the same wouldn’t have helped.</p>
                <button className="bg-dark text-light p-2">More</button>

              </div>

            </div>



          </SwiperSlide>
          <SwiperSlide  id="swip_2">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  WE Optimize  and Grow Your Bussiness
                </h1>

              </div>
              <div className="col-md-12">
                <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>Websites in professional use tempting systems. Commercial publishing platforms and content management systems ensure that you can show different text, different template data using the same wouldn’t have helped.</p>

              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide id="swip_3"><div className="row">
            <div className="col-md-12">
              <h1>
                WE Optimize  and Grow Your Bussiness
              </h1>

            </div>
            <div className="col-md-12">
              <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>Websites in professional use tempting systems. Commercial publishing platforms and content management systems ensure that you can show different text, different template data using the same wouldn’t have helped.</p>

            </div>

          </div></SwiperSlide>
          <SwiperSlide><div className="row">
            <div className="col-md-12">
              <h1>
                WE Optimize  and Grow Your Bussiness
              </h1>

            </div>
            <div className="col-md-12">
              <p style={{ paddingRight: "100px", paddingLeft: "100px" }}>Websites in professional use tempting systems. Commercial publishing platforms and content management systems ensure that you can show different text, different template data using the same wouldn’t have helped.</p>

            </div>

          </div></SwiperSlide>
        </Swiper>

        


      </div>




    </>
  );

}
export default navbar;
