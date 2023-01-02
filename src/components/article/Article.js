import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import './article.css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Navbar from '../navbar';

const Article = () => {
  return (
    <div className='container article' id='blog'>
    <h5 className='text-center'>OUR ARTICLES</h5>
    <h1  className='text-center'>Be Aware of All Events</h1>
    <p className='text-center lead'>There are many variations of passages of lorem ipsum</p>
    <Swiper
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
    
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='card' style={{
            width:"23rem"
        }}>
        <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-1.jpg" alt="" />
             <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link" style={{
        textDecoration:"none",
        color:"black"
    }}>Card link</a>
  </div>
        </div>
   
        </SwiperSlide>
        <SwiperSlide>
         <div className='card' style={{
            width:"23rem"
        }}>
        <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-3.jpg" alt="" />
             <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link"  style={{
        textDecoration:"none",
        color:"black"
    }}>Card link</a>
  </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className='card' style={{
            width:"23rem"
        }}>
        <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg" alt="" />
             <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link"  style={{
        textDecoration:"none",
        color:"black"
    }}>Card link</a>
  </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className='card' style={{
            width:"23rem"
        }}>
        <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg" alt="" />
             <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link"  style={{
        textDecoration:"none",
        color:"black"
    }}>Card link</a>
  </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className='card' style={{
            width:"23rem"
        }}>
        <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg" alt="" />
             <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link"  style={{
        textDecoration:"none",
        color:"black"
    }}>Card link</a>
  </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className='card' style={{
            width:"23rem"
        }}>
        <img src="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg" alt="" />
             <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link"  style={{
        textDecoration:"none",
        color:"black"
    }}>Card link</a>
  </div>
        </div></SwiperSlide>
       
      </Swiper>
      </div>
  )
}

export default Article
