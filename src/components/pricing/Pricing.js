import React from 'react';
import './pricing.css';
import PriceBoard from './PriceBoard';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

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
   {/*

   <div className="container text-md-center">
    <h6 style={{textAlign: "center",}}>CHOOSE YOUR</h6>
    <h1   style={{textAlign: "center"}}>Pricing Plan</h1>
    <p   style={{textAlign: "center"}}>There are many variations of passages of lorem ipsum</p>

<div className="row  text-md-center">
  <div className=" col-md-12 col-lg-12 col-xl-4 mx-auto mt-3">
  <Card style={{ width: '19rem' }} className='text-md-center'>
      <ListGroup variant="flush">
        <ListGroup.Item style={{textAlign: "center"}}>
            <h1>$ 199 </h1>
        </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>2 GB </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>10GB Of Storage </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>2 Email Accounts </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>2 Domains </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>Email Support </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center",padding:"15px"}}>
        <a href='#' className='butn'>Oder Now</a>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  
  </div>
  <div className="col-md-12 col-lg-12 col-xl-4 mx-auto mt-3">
  <Card style={{ width: '19rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{textAlign: "center"}}>
            <h1>$ 260</h1>
        </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>5 GB </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>15GB Of Storage </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>2 Email Accounts </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>5 Domains </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>Full Support </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center",padding:"15px"}}><a href='#' className='butn'>Oder Now</a></ListGroup.Item>
      </ListGroup>
    </Card>



  </div>
  <div className="col-md-12 col-lg-12 col-xl-4 mx-auto mt-3">
  <Card style={{ width: '19rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{textAlign: "center"}}>
            <h1>$ 360</h1>
        </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>10 GB </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>25GB Of Storage </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>2 Email Accounts </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>Unlimited Domains </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center"}}>Full Support </ListGroup.Item>
        <ListGroup.Item style={{textAlign: "center",padding:"15px"}}><a href='#' className='butn'>Oder Now</a></ListGroup.Item>
      </ListGroup>
    </Card>


 </div>
</div>
</div>




   */} 
    
    

    </div>
  )
}

export default Pricing