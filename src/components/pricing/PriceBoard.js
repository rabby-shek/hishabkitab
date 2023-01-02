import React from 'react'
import './priceboard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const PriceBoard = () => {
  return (
    <div className='container'>
       <div className="container text-md-left">

<div className="row  text-md-center">
  <div className=" col-md-12 col-lg-4 col-xl-4 mx-auto mt-3">
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
        <ListGroup.Item style={{textAlign: "center"}}>
        <button className='bg-dark text-light p-2'>btton</button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  
  </div>
  <div className="col-md-12 col-lg-4 col-xl-4 mx-auto mt-3">
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
        <ListGroup.Item style={{textAlign: "center"}}><button className='bg-dark text-light p-2'>btton</button></ListGroup.Item>
      </ListGroup>
    </Card>

  </div>
  <div className="col-md-12 text-center col-lg-4 col-xl-4 mx-auto m-2">
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
        <ListGroup.Item style={{textAlign: "center"}}><button className='bg-dark text-light p-2'>btton</button></ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
</div>
</div>
    </div>
  )
}

export default PriceBoard