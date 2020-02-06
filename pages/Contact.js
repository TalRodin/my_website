
import React from 'react'
import ContactForm from '../components/ContactForm'
class Contact extends React.Component{
    render(){
        return(
            <div >
                <div id='contact'><ContactForm /></div>
                 
                 
                <style jsx>
                   {
                       `
                       *{
                        height:100vh;
                        // width: 50%;
                        background-color: f7f7f7;
                        margin-top:10%;
                        // display: block;
                        // margin-left: auto;
                        // margin-right: auto
                    }
                    
                    h4{
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-family: 'Lato', sans-serif;
                        color:#424242;
                        // margin-top:50%;
                        // margin-right 50%;
                        text-align: center;
                        
                    }
                    h5{
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-family: 'Lato', sans-serif;
                        color:#424242;
                        text-align: left;
                        padding: 10%;
                        font-size: 0.5rem;
                    }
                    ul{
                        margin-top:-35%;
                        margin-left:20%;
                        position: absolute;
                        // display: block;
                    }
                    li{
                        margin-bottom: -190%;
                    }
                    .big-box{
                    position: absolute;
                    // display:center;
                    // margin-left: auto;
                    // margin-right: auto;
                    // // margin-top:50px;
                    // // margin-bottom:50px;
                    // border-radius:1rem;
                    // width:50%;
                    // height:auto;
                    // // display:block;
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
                    `
                   }
               </style>
            </div>
        )
    }
 }
 export default Contact