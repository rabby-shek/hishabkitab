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
    <div>
         <Container>
      <Row>
  
        <Col sm>
        <h3>Base</h3>
        <Card style={{ width: '19rem' }}>
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
        <button>btton</button>
        </ListGroup.Item>
      </ListGroup>
    </Card>

        </Col>
        <Col sm>
        <h3>Premium</h3>
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
        <ListGroup.Item style={{textAlign: "center"}}><button>btton</button></ListGroup.Item>
      </ListGroup>
    </Card>

        </Col>
        <Col sm>
        <h3>Performance</h3>
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
        <ListGroup.Item style={{textAlign: "center"}}><button>btton</button></ListGroup.Item>
      </ListGroup>
    </Card>

        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default PriceBoard