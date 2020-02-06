import Layout from '../components/Layout';
import Link from 'next/link';
import ArrowLink from '../components/ArrowLink'
class HomePage extends React.Component{
  render(){
      return(
          <div id='home' className ='background_body'>
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