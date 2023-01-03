import React from 'react'
import './foter.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { GrPinterest } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';




const Foter = () => {
  return (
    <div id='foter'>
    
       <div className='container foter_top'>
  
            <div className='element'>
                <p style={{
                    width:"250px"
                }}>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
                <div>
                <a href=""><FaFacebookF className='facebook'/></a>
            <a href="#"><BsTwitter className='twitter'/></a>
            <a href="#"><GrPinterest className='pinterest'/></a>
            <a href="#"><FaLinkedinIn className='linkedin'/></a>
            <a href="#"><FaTelegram className='telegram'/></a>
                </div>
            </div>
            <div  className='element'>
            
                <p><a href='#'>HELP</a></p>
                    <p><a  href='#'>Customer Support</a></p>
                    <p><a  href='#'>Contacts</a></p>
                    
                
            </div>
            <div  className='element'>
             
                    <p><a  href='#'>RESOURCES</a></p>
                    <p><a  href='#'>About</a></p>
                    <p><a  href='#'>Blog</a></p>
                    <p><a  href='#'>Partners</a></p>
              
            </div>
            <div  className='element' >
               
                    <p><a  href='#'>LEGAL</a></p>
                    <p><a  href='#'>Terms of Use</a></p>
                    <p><a  href='#'>Privacy Policy</a></p>
                    <p><a  href='#'>Legal Notice</a></p>
                    <p><a  href='#'>Documentations</a></p>
             
            </div>
            <div  className='element'>
                
            <p><a  href='#'>FOOTER MENU</a></p>
            <p><a  href='#'>Instagram Profile</a></p> 
            <p><a  href='#'>Our Sitemap</a></p>
            <p><a  href='#'>Return</a></p>
            <p><a  href='#'>Get it Now!</a></p>
             
            </div>
           
        </div>
        <hr />
        <div className=' container foter_bottom'>
        <div className='team'>HishabKitab C 2022 CREATED BY Hishab Kitab Team. ULTIMATE ACCOUNTING SOLUTIONS.</div>
        <div className='credit'>
            <img src="https://hishabkitab.com/wp-content/themes/woodmart/images/payments.png" alt="credit" />
        </div>

        </div>
      
    
       
      
      </div>
    

  )
}

export default Foter