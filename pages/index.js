import Layout from '../components/Layout';

const HomePage = () => (
        <Layout>
            <div className ='background_body'>
                <div>
                <h1>Alyona Rodin</h1>
                
            </div>
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
                `}
            </style>
            </div>
        </Layout>
  )
  
export default HomePage;