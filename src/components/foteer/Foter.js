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
    
       <div className='foter_top'>
  
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
            <div  className='element' style={{
                marginLeft:"3%"
            }}>
            
                
                    <div>HELP</div>
                    <div>Customer Support</div>
                    <div>Contacts</div>
                
            </div>
            <div  className='element'  style={{
                marginLeft:"3%"
            }}>
             
                    <div>RESOURCES</div>
                    <div>About</div>
                    <div>Blog</div>
                    <div>Partners</div>
              
            </div>
            <div  className='element'  style={{
                marginLeft:"3%"
            }}>
               
                    <div>LEGAL</div>
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Legal Notice</div>
                    <div>Documentations</div>
             
            </div>
            <div  className='element'  style={{
                marginLeft:"3%"
            }}>
                
                    <div>FOOTER MENU</div>
                    <div>Instagram Profile</div>
                    <div>Our Sitemap</div>
                    <div>Return</div>
                    <div>Get it Now!</div>
             
            </div>
           
        </div>
        <hr />
        <div className='foter_bottom'>
        <div className='' style={{
            float:"left",
            width:"100%",
            fontSize:"15px"
        }}>HishabKitab C 2022 CREATED BY Hishab Kitab Team. ULTIMATE ACCOUNTING SOLUTIONS.</div>
        <div className='text-sm-center' style={{
           
        }}>
            <img src="https://hishabkitab.com/wp-content/themes/woodmart/images/payments.png" alt="credit" />
        </div>

        </div>
      
    
       
      
      </div>
    

  )
}

export default Foter