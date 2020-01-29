import Layout from '../components/Layout';
import Link from 'next/link';
import HomePage from 'index.js'
import Contact from 'Contact.js'
const App = () => (
        <Layout>
            <div >
               <HomePage />
               <Contact />
            </div>
        </Layout>
  )
  
export default App;