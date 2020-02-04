import React from 'react'

const ContactForm = () =>{
    return(
        <div>
            <h4>
            Contact Information
            </h4>
            <ul>
                <li>
                    Email: alyona.rodin@gmail.com
                </li>
                <li>
                    Phone: 9174639527
                </li>
            </ul>
            <div className='big-box'>
                <h5>Send Message</h5>
          
                  <div className="box">
                          <h5>Your Name</h5>
                  </div>
              
                  <div className="box">
                          <h5>Email address</h5>
                  </div>
                  <div  className="box">
                      <h5>Your Message...</h5>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                  </div>
            </div>
            <style jsx>
                {`@import url('https://fonts.googleapis.com/css?family=Lato');
                    h4{
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-family: 'Lato', sans-serif;
                        color:#424242;
                        text-align: center;
                    }
                    ul{
                        
                    }
                    `}
            </style>
        </div>
        
        )
}
export default ContactForm
