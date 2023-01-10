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
//importing material ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="https://hishabkitab.com/wp-content/uploads/2021/09/corporate-2-blog-img-2.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </SwiperSlide>
       
      </Swiper>
      </div>
  )
}

export default Article
