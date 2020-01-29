import Layout from '../components/Layout';
import Link from 'next/link';
const HomePage = () => (
        <Layout>
            <div className ='background_body'>
                <div>
                <h1>Alyona Rodin</h1>
                <div className='social'>
                <a href={`social_media/linkedin`}><img src={`/linkedin-brand-logo-47382.png`} width={30} height={30}/></a>
                <a href={`social_media/github`}><img src={`/github-brand-logo-47401.png`} width={30} height={30}/></a>
                <a href={`social_media/twitter`}><img src={`/twitter-brand-logo-47399.png`} width={30} height={30}/></a>
                </div>
                
            </div>
            <div className="arrow"><span><Link href='/contact'><img src={`arrow-down-sign-to-navigate.png`} width={20} height={20}/></Link></span></div>
            <style jsx>
            {`.background_body{
                    background-image: radial-gradient(#d7ccc8 2%, transparent 2%),
                    radial-gradient(#d7ccc8 2%, transparent 2%);
                    background-color: #fff;
                    background-position: 0 0, 50px 50px;
                    background-size: 100px 100px;
                    height: 650px;
                    width: 100%;
                    position: fixed;
                    justify-content: center;
                    text-align: center;
                }
               h1{
                position: absolute;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%) }
                text-transform: uppercase;
                letter-spacing: 18px;
                font-family: 'Lato', sans-serif;
                color:#424242;
                font-weight: normal;
               }
               a{
                margin-bottom: 5px;
                margin-right: 30px;
                display: block;
                text-align:right;
               }
               .social{
                margin-top: 20%;
               }
               .arrow{
                position: absolute;
                top: 100%;
                left: 50%;
                   
               }
                `}
            </style>
            </div>
        </Layout>
  )
  
export default HomePage;