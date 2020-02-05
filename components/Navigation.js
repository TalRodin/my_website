import {Link} from 'react-scroll'
import ArrowLink from './ArrowLink'
import React from 'react'
class Navigation extends React.Component{
    
    render(){
        
        return (
            <div>
            <div className="navigation">
                <ul>
                    <li>
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-30}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        ><a>Home</a>
                        </Link>
                      
                    </li>
                    <li>
                       
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-70}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        ><a>Contact</a>
                        </Link>
                       
                    </li>
                </ul>
                </div>
                <div className='social'>
                <a href={`social_media/linkedin`}><img src={`/linkedin-brand-logo-47382.png`} width={30} height={30}/></a>
                <a href={`social_media/github`}><img src={`/github-brand-logo-47401.png`} width={30} height={30}/></a>
                <a href={`social_media/twitter`}><img src={`/twitter-brand-logo-47399.png`} width={30} height={30}/></a>
                 </div>
                 {/* <div>
                 <div className="arrow"><span><L href='/contact'><img src={`icons8-up-down-arrow-80.png`} width={20} height={20}/></L></span></div>
                 </div> */}
                 
                <style jsx>
                   {`
                       .navigation{
                           position:fixed;
                           top: 53%;
                           transform: translateY(-50%);

                           
                       }
                       ul{
                        list-style: none;
                       }
                       .navigation ul li{
                           padding-left: -3px;
                           position:relative
                       }
                       .navigation ul li {
                           text-decoration:none;
                           text-transform: uppercase;
                           color:#424242;
                           position:relative;
                           font-size: 0.6rem;
                           line-height: 1.6rem;
                           cursor:pointer;
                       }

                       .navigation ul li a:before{
                           content: '';
                           position: absolute;
                           width: 6px;
                           height: 6px;
                           left:-15px;
                           top:12px;
                           transform: translateY(-50%);
                           border-radius: 50%;
                           border: 1px solid #424242
//                         background: linear-gradient(145deg, #dedede, #ffffff);
// box-shadow:  1px 1px 2px #e3e3e3, 
//              -1px -1px 2px #ffffff;
                       }
                       a{
                        margin-bottom: 5px;
                        margin-right: 10px;
                        // display: block;
                        text-align:right;

                        }
                      .social{
                        margin-top: 0%;
                        margin-right:2%;
                        position:fixed;
                        top:45%;
                        left:96%;
                        } 
                    }
                       `
                   }
               </style>
            </div>
          
        )
    }
}
export default Navigation