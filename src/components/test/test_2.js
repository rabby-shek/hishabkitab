import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './test_2.css';
const image = "https://hishabkitab.com/wp-content/uploads/2022/12/HKlogo.svg";
const test_2 = (props) => {

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-250px";
  }
}
  
  return (
    <>
  
  
         {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={image} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  <div className='title'>MENU</div>
                </Offcanvas.Title>
                <Offcanvas.Title>
                  CATEGORIES
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">{props.links[0].link1}</Nav.Link>
                  <Nav.Link href="#action2">SERVICES</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                  <Nav.Link href="#action2">PRICING</Nav.Link>
                  <Nav.Link href="#action2">BLOG</Nav.Link>
                </Nav>  
                <div className="support" >
        <div className="part_1">Need Support</div>
        <p>We are online 24/7</p>

        </div>
        <div className="quote"><a href="#">GET QUOTE</a></div>                 
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      ))}
    
    {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" id='navbar'>
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={image} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  <div className='title'>MENU</div>
                </Offcanvas.Title>
                <Offcanvas.Title>
                  CATEGORIES
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">{props.links[0].link1}</Nav.Link>
                  <Nav.Link href="#action2">SERVICES</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                  <Nav.Link href="#action2">PRICING</Nav.Link>
                  <Nav.Link href="#action2">BLOG</Nav.Link>
                </Nav>  
                <div className="support" >
        <div className="part_1">Need Support</div>
        <p>We are online 24/7</p>

        </div>
        <div className="quote"><a href="#">GET QUOTE</a></div>                 
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      ))}


    





    </>
  )
}

export default test_2