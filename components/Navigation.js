import {Link} from 'react-scroll'
class Navigation extends React.Component{
    render(){
        return (
            <div className="navigation">
                <ul>
                    <li>
                        <a>
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
                        > Home
                        </Link>
                        </a>
                    </li>
                    <li>
                        <a>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        > Contact
                        </Link>
                        </a>
                    </li>
                </ul>
                <style jsx>
                   {
                       `
                       .navigation{
                           position:fixed;
                           top: 50%;
                           transform: translateY(-50%);

                           
                       }
                       ul{
                        list-style: none;
                       }
                       .navigation ul li{
                           padding-left: 50px;
                           position:relative
                       }
                       .navigation ul li a{
                           text-decoration:none;
                           color:#424242;
                        //    position:relative
                           font-size: 0.5rem;
                           line-height: 1.5rem;
                       }

                       .navigation ul li a:before{
                           content: '';
                           position: absolute;
                           width: 8px;
                           height: 8px;
                           left:30px;
                           top:12px;
                           transform: translateY(-50%);
                           border-radius: 50%;
                       
                        background: linear-gradient(145deg, #dedede, #ffffff);
box-shadow:  1px 1px 2px #e3e3e3, 
             -1px -1px 2px #ffffff;
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