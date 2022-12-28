import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
import Nav_data from '../test/nav_data';


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <>
  
      <Carousel activeIndex={index} onSelect={handleSelect}>
        

        
        



      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/1024px-TEIDE.JPG"
          alt="Second slide"
          
          
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg/800px-Pencil_drawing_of_a_girl_in_ecstasy.jpg"
          alt="Third slide"
          id='design'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </>
  )
}

export default Slider