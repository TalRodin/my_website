// import Layout from '../components/Layout';
// import Link from 'next/link';
// import {loadFirebase} from '../lib/db'
// import 'isomorphic-fetch'


// class Contact extends React.Component{
//     render(){
//         return(

        
//         <div className="background_body" id='contact'>
//             <div  className="col-left">
//                 <h4>Contact Information</h4>
//                 <div className ='course'>
//                     <ul className='category'>
//                         <li>
//                             <a>
//                                <span className='step'></span>
//                                <span className='label'>Email: alyona.rodin@gmail.com</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a>
//                                 <span className='step'></span>
//                                 <span  className='label'>Phone Number: 9174639527</span>
//                             </a>
//                         </li>
//                     </ul>
              
//                 </div>
//             </div>
//             <div className='big-box'>
//                 <h4>Send Message</h4>
          
//                 <div className="box">
//                         <h5>Your Name</h5>
//                 </div>
              
//                 <div className="box">
//                         <h3>Email address</h3>
//                 </div>
//                 <div  className="box">
//                     <h3>Your Message...</h3>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                 </div>
//             </div>
//             <style jsx>
//                 {`@import url('https://fonts.googleapis.com/css?family=Lato');

//                 .background_body{
//                     background-color:#eee;
//                     background-size: 90px 90px;
//                     background-position: 0 0, 50px 50px;
//                     height: 650px;  
//                 }
//                 .big-box{
//                     position: relative;
//                     margin-left: auto;
//                     margin-right: auto;
//                     margin-top:50px;
//                     margin-bottom:50px;
//                     border-radius:1rem;
//                     width:50%;
//                     height:auto;
//                     background-color:#eee;
//                     box-shadow:
//         -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
//       -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
//       -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
//       -50px -50px 85px rgba(0255,255,255, 0.07),
      
//       2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
//       6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
//       15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
//       50px 50px 85px rgba(0, 0, 0, 0.07);
//                 }
//             //     .col-left{
//             //     float:left;
//             //     width: 50%;
//             //     text-align: center;
//             //      }
//             //      .col-right{
//             //         float:left;
//             //         width: 50%;
//             //         text-align: center;
//             //      }
                


//             // h4{
//             //     text-transform: uppercase;
//             //     letter-spacing: 2px;
//             //     font-family: 'Lato', sans-serif;
//             //     color:#424242;
//             //     margin-top:%;
//             //     // text-align: right;
//             //     padding: 10%;
//             // }
//             .box{
//                 position: relative;
//                 // padding:0.1px;
//                 margin-left: auto;
//                 margin-right: auto;
//                 margin-top:60px;
//                 padding-bottom:10px;
//                 border-radius:1rem;
//                 // justify-content: space-around;
//                 width:60%;
//                 // height:auto;
//                 background: linear-gradient(135deg, #eee, #eee);
//                 // background-color:#eee;
//                 transition: all .2s ease-in-out;
//                 box-shadow: inset 5px 5px 7px 5px rgba(0, 0, 0, 0.1), inset -5px -5px 7px 5px rgba(238, 242, 246, 0.6);
//             }
            
            
//             // h3{
//             //     text-align: left;
//             // }
//             // .course{
//             //     padding-left: 0em;
//             //     margin-left: 12.5em;
//             //     border-left: 1px solid rgb(255, 255, 255);
//             // }
//             // li{
                
//             //     list-style: none;
//             //     font-size: 14px;
//             //     line-height: 2em;
//             //     word-spacing: 2px;
//             //     color: #888;
//             //     font-family: 'Lato', sans-serif;
//             //     width: 85%;
//             //     padding: 0 10px;
               
//             // }
//             // ul{
//             //     display: block;
//             //     list-style-type: disc;
//             //     margin-block-start: 1em;
//             //     margin-block-end: 1em;
//             //     margin-inline-start: 0px;
//             //     margin-inline-end: 0px;
//             //     padding-inline-start: 0px;
//             // }
//             // .label{
//             //     font-size: 14px;
//             //     line-height: 1.5em;
//             //     word-spacing: 1px;
//             //     color: #888;
//             //     font-family: 'Lato', sans-serif;
//             //     width: 95%;
//             //     padding: 0 15px;
//             // }
//             {
//                 height:100vh;
                
//                 // background-color: f7f7f7;
//                 display: block;
//                 margin-left: auto;
//                 margin-right: auto
//                }
//             `}
//             </style>
//         </div>

//         )
//     }
  

// }
// export default Contact

class Contact extends React.Component{
    render(){
        return(
            <div id='contact'>
                
                 <h4>Contact Information</h4>
                 
                 <ul>
                     <li>
                         Email: alyona.rodin@gmail.com
                     </li>
                     <li>
                         Phone: 9174639527
                     </li>
                     
                 </ul>
                 
                <style jsx>
                   {
                       `
                     height:60vh;
                        background-color: f7f7f7;
                        display: block;
                        margin-left: auto;
                        margin-right: auto
                    
                    h4{
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-family: 'Lato', sans-serif;
                        color:#424242;
                        // margin-top:50%;
                        // margin-right 50%;
                        text-align: center;
                        padding: 10%;
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
                    `
                    
                   }
               </style>
            </div>
        )
    }
 }
 export default Contact