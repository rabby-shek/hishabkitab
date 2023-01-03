import React from "react";
import "./new_foter.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import FoterTop from "../foterTop/FoterTop";

const New_footer = () => {
  return (
    <>

    <FoterTop />
    <div className="foter">
      <div className="container text-md-left">
        <div className="row text-md-left">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-5 m-2" >
            <p>
              Condimentum adipiscing vel neque dis nam parturient orci at
              scelerisque neque dis nam parturient.
            </p>
            <div>
              <a href="">
                <FaFacebookF className="facebook" />
              </a>
              <a href="#">
                <BsTwitter className="twitter" />
              </a>
              <a href="#">
                <GrPinterest className="pinterest" />
              </a>
              <a href="#">
                <FaLinkedinIn className="linkedin" />
              </a>
              <a href="#">
                <FaTelegram className="telegram" />
              </a>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5 p-2">
            <p>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white",
        
                }}
              >
                {" "}
                HELP
              </a>
            </p>
            <p>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white"
                 

                }}
                className='foter_element'
              >
                Customer Support
              </a>{" "}
            </p>
            <p>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Contacts
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
            <p>
              {" "}
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
               
              >
                RESOURCES
              </a>{" "}
            </p>
            <p>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                About
              </a>
            </p>
            <p>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Blog
              </a>
            </p>
            <p>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Partners
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
              >
                LEGAL
              </a>{" "}
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Terms of Use
              </a>
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Privacy Policy
              </a>
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Legal Notice
              </a>
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Documentations
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5 p-2">
            <p>
              <a href=""
               style={{
                  textDecoration: "none",
                  color:"white"
                }}
              >FOOTER MENU</a>{" "}
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Instagram Profile
              </a>
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Our Sitemap
              </a>
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Return
              </a>
            </p>
            <p>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
                className='foter_element'
              >
                Get it Now!
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div
          className="row  text-md-center"
          style={{
            paddingBottom: "20px",
          }}
        >
          <div className=" col-md-12 col-lg-7 col-xl-7 mx-auto ">
            HishabKitab C 2022 CREATED BY Hishab Kitab Team. ULTIMATE ACCOUNTING
            SOLUTIONS.
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto"></div>
          <div className="col-md-12 col-lg-3 col-xl-3 mx-auto ">
            <img
              src="https://hishabkitab.com/wp-content/themes/woodmart/images/payments.png"
              alt="credit"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default New_footer;
