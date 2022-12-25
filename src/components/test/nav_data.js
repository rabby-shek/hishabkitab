import React from 'react'
import Test from './test';
import Test_2 from './test_2';






const nav_data = () => {
    const data = [
        {
            link1 : "HOME",
            link2 : "SERVICES",
            link3 : "ABOUT US",
            link4 : "PRICING",
            link5 : "BLOG"
        }
    ]; 
   
  return (
    <>
   {/* <Test links = {data}/>*/}
  
    <Test_2 links = {data}/>

    </>
  )
}

export default nav_data