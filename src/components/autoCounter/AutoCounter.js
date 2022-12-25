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
            background: "black",
            width: "100%",
            color: "white",
            height: "1400px",
            padding: "20px",
            marginTop: "300px",
          }}
        >
          <h1>
            {count && <CountUp start={0} end={2000} duration={2} delay={0} />}
          </h1>
          <h1>
            {count && <CountUp start={0} end={2012} duration={2} delay={0} />}
          </h1>
          <h1>
          {count && <CountUp start={0} end={190} duration={2} delay={0} />}
          </h1>
          <h1>
          {count && <CountUp start={0} end={750} duration={2} delay={0} />}
          </h1>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default AutoCounter;
