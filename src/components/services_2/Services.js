import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <>
    <div className="services" id="services">
   
          <div className="services_left_side">
            <h6>HOW TO START</h6>
            <h1>You Can Entrust Your Business to Us</h1>
            <p>
              Usually, we prefer the real thing, wine without sulfur based
              preservatives, real butter, not margarine, and so we'd like our
              layouts and designs with.
            </p>
            <div className="list">
              <ul>
                <li>
                  <span>
                    <BsCheckLg />
                  </span>
                  MARKET RESEARCH
                </li>
                <li>
                  <span>
                    <BsCheckLg />
                  </span>
                  SEO AUDIT
                </li>
                <li>
                  <span>
                    <BsCheckLg />
                  </span>
                  LINK BUILDING
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <BsCheckLg />
                  </span>
                  BUSINESS STRATEGY
                </li>
                <li>
                  <span>
                    <BsCheckLg />
                  </span>
                  FINEST QUALITY
                </li>
                <li>
                  <span>
                    <BsCheckLg />
                  </span>
                  BEST SUPPORT
                </li>
              </ul>
            </div>
            <div className=" btn">
              <div className="btn_1">
                <a href="">READ MORE</a>
              </div>
              <div className="btn_2">
                <a href="">ABOUT US</a>
              </div>
            </div>
          </div>
     

          <div className="services_right_side">
            <div><img style={{
              width:'100%'
            }} src="https://i0.wp.com/hishabkitab.com/wp-content/uploads/2021/09/corporate-2-img-1.jpg?fit=580%2C540&ssl=1" alt="" /></div>
          </div>
          

    </div>

    </>
  );
};

export default Services;
