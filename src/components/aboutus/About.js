import React from 'react'
import AutoCounter from '../autoCounter/AutoCounter'
import './about.css'
const About = () => {
    return (
        <div id='aboutus'>
        <div className='container'>
        <div className='about_left'>
                <img src="https://i0.wp.com/hishabkitab.com/wp-content/uploads/2021/09/corporate-2-img-2.png?fit=520%2C620&ssl=1" alt="about us" />
                <h1>Check out These Rules</h1>
                <p>That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small.</p>

            </div>
            <div className='about_right'>
                <h1 className='text-light'>
                    How Effective Is What
                    Our Clients Use?</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <div>
                    <AutoCounter   className="com"/>
                   
                </div>
                <p>A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow.</p>
                <button className='bg-light p-2'>view more</button>


            </div>
        </div>

        </div>
          
    )
}

export default About