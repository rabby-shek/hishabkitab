import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav_data from './nav_data';
import './test.css';

const image = "https://hishabkitab.com/wp-content/uploads/2022/12/HKlogo.svg";

const test = (props) => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={image} alt='Hishabkitab'/></Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: '300px' }}
          >
            <div className='modules'>
                <div className='p-3 text-center d-flex'>
                    <Nav.Link href="#action1" className='p-3'>MENU</Nav.Link>
                    <Nav.Link href="#action1"  className='p-3'>CATEGORIES</Nav.Link>
                </div>
                </div>
            <Nav.Link href="#action1" className='links'>{props.links[0].link1}</Nav.Link>
            <Nav.Link href="#action2" className='links'>{props.links[0].link2}</Nav.Link>
            <Nav.Link href="#action2" className='links'>{props.links[0].link3}</Nav.Link>
            <Nav.Link href="#action2" className='links'>{props.links[0].link4}</Nav.Link>
            <Nav.Link href="#action2" className='links'>{props.links[0].link5}</Nav.Link>
          </Nav>
          <div className="get">
        <div className="support">
        <div className="part_1">Need Support</div>
        <p>We are online 24/7</p>

        </div>
        <div className="quote"><a href="#">GET QUOTE</a></div>
       

        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default test;