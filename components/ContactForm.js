import React from 'react'

const ContactForm = () =>{
    return(
        <div>
            <h4>
            Contact Information
            </h4>
            <div className='big-box'>
            <div className='stick' id='con-info'>
            <ul>
                <li>
                    Email: alyona.rodin@gmail.com
                </li>
                <li>
                    Phone: 9174639527
                </li>
            </ul>
            </div>
            
                <h5>Send Message</h5>
          
                  <div className="box">
                          <h6>Your Name</h6>
                  </div>
              
                  <div className="box">
                          <h6>Email address</h6>
                  </div>
                  <div  className="box">
                      <h6>Your Message...</h6>
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
                        // margin-left:-5%;
                        padding-right:5%;
                        padding-left:5%;
                        font-size: 0.9rem;
                        // display: block;
                        // position:absolute;
                    }
                    li{
                        list-style: none;
                    }
                    .stick{
                        padding-top: 2em;
                        
                        padding-left: 5em;
                        margin-left: 20em;
                        border-left: 1px solid #f7a1a2;
                    }
                    #con-info{
                        width: 40%;
                        padding-top: 5%;
                        padding: 0px 0;
                        padding-left:0px;
                        margin: 50px 50px;
                        position: absolute;
                        overflow: hidden;
                    }
                    .big-box{
                        position: relative;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top:50px;
                    margin-bottom:50px;
                    padding-bottom:30px;
                    border-radius:1rem;
                    width:70%;
                    
                    height:auto;
                        background-color:f7f7f7;
                        box-shadow:
                        -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
                        -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
                        -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
                        -50px -50px 85px rgba(0255,255,255, 0.07),
                        
                        2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
                        6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
                        15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
                        50px 50px 85px rgba(0, 0, 0, 0.07);
                     }
                                 .box{
                position: relative;
                // padding:0.1px;
                margin-left: auto;
                margin-right: 5%;;
                // margin-top:60px;
                padding-left:40px;
                padding-bottom:5px;
                border-radius:1rem;
                width:40%;
                background: linear-gradient(135deg, #eee, #eee);
                transition: all .2s ease-in-out;
                box-shadow: inset 5px 5px 7px 5px rgba(0, 0, 0, 0.1), inset -5px -5px 7px 5px rgba(238, 242, 246, 0.6);
            }
            h5{
                margin-left:68%;
                padding-top: 5%;
            }
                    `}
            </style>
        </div>
        
        )
}
export default ContactForm
