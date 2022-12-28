import React,{useState} from 'react'
import './test_canvas.css';
import Menu from './Menu';
import {GiHamburgerMenu} from 'react-icons/gi';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Categories from './Categories';

const Test_canvas = () => {
    const [show, setShow] = useState(false);
    const [navShow,setNav] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
          
        <GiHamburgerMenu onClick={handleShow} className="ham" /><span onClick={handleShow} className="sathi">MENU</span>
      
      <Offcanvas show={show} onHide={handleClose} placement="end" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='top_nav'>
                <div className='menu' onClick={()=>setNav(true)}>
                    Menu 
                </div>
                <div className='cat' onClick={()=>setNav(false)}>
                    Categories
                </div>

            </div>
            <div>
                {
                    ((navShow) ? <Menu /> : <Categories />)

                }

            </div>
          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Test_canvas