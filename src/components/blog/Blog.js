import React, { useRef, useState } from 'react'
import './blog.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Blog = () => {
  return (
    <div id='blog_top'>
          <div className="container text-md-left">
          <div className="row  text-md-left">
          <div className=" col-md-12 col-lg-12 col-xl-12 mx-auto">
          <img src="https://i0.wp.com/hishabkitab.com/wp-content/uploads/2021/09/corporate-2-img-3-opt.png?fit=128%2C128&ssl=1" alt="" />

          </div>
            
          </div>

<div className="row  text-md-left">
  <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
    <h4 className='text-light'>Trusted Us for A Long Time!</h4>
    <p className='text-light'>We will answer any questions you may have about our online sales.</p>
  </div>
  <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
    <h4 className='text-light'>Trusted Us for A Long Time!</h4>
    <p className='text-light'>We will answer any questions you may have about our online sales.</p>
  </div>
  <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
   <h4 className='text-light'>How Much Do Trust Us?</h4>
   <p className='text-light'>A small river named Duden flows by their place and supplies it with the necessary.</p>
  </div>
  <div className="row  text-md-center">
  <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mt-3">
  <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide id='slide'>
          <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-microsoft.svg" alt="" />Microsoft
        </SwiperSlide>
        <SwiperSlide id='slide'>
          <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-network-2.svg" alt="" />Matic
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-slack.svg" alt="" />Slack
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-figma.svg" alt="" />Figma
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-sketch.svg" alt="" />Sketch
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-pinterest.svg" alt="" />Printerest
        </SwiperSlide>
      </Swiper>

  </div>

  </div>
</div>
</div>
    </div>
  )
}

export default Blog