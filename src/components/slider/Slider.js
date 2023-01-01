import React, { useRef,useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Nav_data from '../test/nav_data';
import Swiper from 'swiper';


import './slider.css'
import { Autoplay, Pagination, Navigation } from "swiper";


const Slider = () => {
 
  
  return (
    <>
 <div class="swiper">

  <div class="swiper-wrapper">

    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>

  <div class="swiper-pagination"></div>


  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <div class="swiper-scrollbar"></div>
</div>
    
 


    </>
  )
}

export default Slider