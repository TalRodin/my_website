// import Layout from '../components/Layout';
// import Link from 'next/link';
// import HomePage from './index'
// import Contact from './Contact'
// import Navigation from '../components/Navigation'
// const App = () => (
//         <Layout>
//             <div >
//                <Navigation/>
//                <HomePage />
//                <Contact />
//             </div>
//         </Layout>
//   )
  
// export default App;




// import Layout from '../components/Layout';
// import Link from 'next/link';
// const HomePage = () => (
        
//             <div className ='background_body' id='home'>
//                 <div>
//                 <h1>Alyona Rodin</h1>
//                 <div className='social'>
//                 <a href={`social_media/linkedin`}><img src={`/linkedin-brand-logo-47382.png`} width={30} height={30}/></a>
//                 <a href={`social_media/github`}><img src={`/github-brand-logo-47401.png`} width={30} height={30}/></a>
//                 <a href={`social_media/twitter`}><img src={`/twitter-brand-logo-47399.png`} width={30} height={30}/></a>
//                 </div>
                
//             </div>
//             <div className="arrow"><span><Link href='/contact'><img src={`arrow-down-sign-to-navigate.png`} width={20} height={20}/></Link></span></div>
//             <style jsx>
//             {`.background_body{
//                     background-image: radial-gradient(#d7ccc8 2%, transparent 2%),
//                     radial-gradient(#d7ccc8 2%, transparent 2%);
//                     background-position: 0 0, 50px 50px;
//                     background-size: 100px 100px;
//                     margin-top:1%;
//                     height: 650px;
//                     width: 100%;
//                     position: fixed;
//                     justify-content: center;
//                     text-align: center;
//                     height:100vh;
//                 }
//                h1{
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 margin-right: -50%;
//                 transform: translate(-50%, -50%);
//                 text-transform: uppercase;
//                 letter-spacing: 20px;
//                 font-weight: normal;
//                 font-size: 1.5rem;
//                 line-height: 1.5rem;
//                }
//                a{
//                 margin-bottom: 5px;
//                 margin-right: 30px;
//                 display: block;
//                 text-align:right;
//                }
//                .social{
//                 margin-top: 20%;
//                 margin-right:2%;
//                }
//                .arrow{
//                 position: absolute;
//                 top: 100%;
//                 left: 50%;
                   
//                }
//                {
//                 height:100vh;
                
//                 // background-color: f7f7f7;
//                 display: block;
//                 margin-left: auto;
//                 margin-right: auto
//                }
//                 `}
//             </style>
//             </div>
        
//   )
  
// export default HomePage;

import Layout from '../components/Layout';
import Link from 'next/link';
import ArrowLink from '../components/ArrowLink'
class HomePage extends React.Component{
  render(){
      return(
          <div id='home' className ='background_body'>
                    
                    {/* <div className='svg_wave'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dae8f5" fill-opacity="0.2" d="M0,64L60,90.7C120,117,240,171,360,202.7C480,235,600,245,720,213.3C840,181,960,107,1080,106.7C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>  */}
                 
                 <h1>Alyona Rodin</h1>
                 <ArrowLink />
                 
        
              <style jsx>
                  {
                      `
                      *{height:100vh;
                      width: 50%;
                      background-color: f7f7f7;
                      display: block;
                      margin-left: auto;
                      margin-right: auto}
                      .background_body{
                                            background-image: radial-gradient(#b8b5b8 2%, transparent 2%),
                                            radial-gradient(#b8b5b8 2%, transparent 2%);
                                            background-position: 0 0, 50px 50px;
                                            background-size: 100px 100px;
                                            margin-top:1%;
                                            // height: 650px;
                                            width: 100%;
                                            // position: fixed;
                                            justify-content: center;
                                            text-align: center;
                                            // height:100vh;
                                        }
                      h1{
                          position: absolute;
                          top: 100%;
                          left: 50%;
                          
                          margin-right: -50%;
                          transform: translate(-50%, -50%);
                          text-transform: uppercase;
                          letter-spacing: 20px;
                          font-weight: normal;
                          font-size: 1.5rem;
                          line-height: 1.5rem;
                      }
                                   

                      `
                  }
              </style>
          </div>
      )
  }
}
export default HomePage