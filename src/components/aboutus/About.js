import React from 'react'
import AutoCounter from '../autoCounter/AutoCounter'
import './about.css'
const About = () => {
    return (
        <div id='aboutus'>
        <div className="container text-md-left">

<div className="row  text-md-left">
  <div className=" col-md-12 col-lg-12 col-xl-6 mx-auto mt-3">
  <img style={{width:"100%"}} src="https://i0.wp.com/hishabkitab.com/wp-content/uploads/2021/09/corporate-2-img-2.png?fit=520%2C620&ssl=1" alt="about us" />
  
  </div>
  <div className="col-md-12 col-lg-12 col-xl-6 mx-auto mt-3">
  <h1 className='text-light mt-3'>
                    How Effective Is What
                    Our Clients Use?</h1>
                <p className='text-light'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <AutoCounter   className="com"/>
               


  </div>
</div>
<div className="row  text-md-left mt-5">
  <div className=" col-md-12 col-lg-12 col-xl-6 mx-auto mt-3">
  <h1 className='text-light'>Check out These Rules</h1>
                <p className='text-light'>That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small.</p>
  
  </div>
  <div className="col-md-12 col-lg-12 col-xl-6 mx-auto mt-5">
<p className='text-light'> A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow.</p>


  </div>
</div>
</div>

        </div>
          
    )
}

export default About