import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AutoCounter = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={() => setCount(true)}>
        <div
          style={{
            width: "100%",
            color: "white",
            height: "350px",
            padding: "20px",
            marginTop: "47px",
          }}
        >
        <div>
        <h1>
            {count && <CountUp start={0} end={2000} duration={2} delay={0} />}
          </h1>
          <h6>HAPPY COSTUMERS</h6>

        </div>
        <div>
        <h1>
            {count && <CountUp start={0} end={2012} duration={2} delay={0} />}
          </h1>
          <h6>FOUNDING YEAR</h6>

        </div>
        <div>
        
        <h1>
          {count && <CountUp start={0} end={190} duration={2} delay={0} />}
          </h1>
          <h6>COMPANY WORK WITH US</h6>

        </div>
        <div>
        <h1>
          {count && <CountUp start={0} end={750} duration={2} delay={0} />}
          </h1>
          <h6>PROJECTS COMPLETED</h6>

        </div>
        <button style={{
                    backgroundColor:"white",
                    color:"black",
                    padding:"10px",
                    marginTop:"5px",
                    border:"1px solid black"
                }}>View More</button>
         
        
         
        </div>
      </ScrollTrigger>
    </>
  );
};

export default AutoCounter;
