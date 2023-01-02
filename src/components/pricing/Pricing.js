import React from 'react';
import './pricing.css';
import PriceBoard from './PriceBoard';
import Row from 'react-bootstrap/Row';

const Pricing = () => {
  return (
    <div id='pricing'>
    <Row>
      <h6 style={{textAlign: "center",}}>CHOOSE YOUR</h6>
    </Row>
    <Row>
      <h1   style={{textAlign: "center"}}>Pricing Plan</h1>
    </Row>
    <Row>
      <p   style={{textAlign: "center"}}>There are many variations of passages of lorem ipsum</p>
    </Row>

    <PriceBoard />
    
    

    </div>
  )
}

export default Pricing