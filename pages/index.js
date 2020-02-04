import Layout from '../components/Layout';
import Link from 'next/link';
import HomePage from './App'
import Contact from './Contact'
import Navigation from '../components/Navigation'
const App = () => (
        <Layout>
            <div >
               <Navigation/>
               <HomePage />
               <Contact />
               <style jsx>
            {
            `@import url('https://fonts.googleapis.com/css?family=Lato');
          
            h2{
                color:#424242;
                margin-left: 35%;
                margin-top: 2%;
                text-transform: uppercase;
                font-family: 'Lato', sans-serif;
                position:fixed;
            }
            p{
                color:#424242;
                margin-left: 33%;
                margin-top: 10%;
                text-transform: uppercase;
                font-family: 'Lato', sans-serif;
                position:fixed;
            }`}
        </style>
            </div>
        </Layout>
  )
  
export default App;