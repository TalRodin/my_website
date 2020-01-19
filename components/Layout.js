import Navbar from './Navbar';
import Head from 'next/head'
const Layout=(props)=>(
    <div>

        <Head>
            <title>alyonarodin</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <div >
        <Navbar/>
        {props.children}
        
        </div>
        
    </div>
)
export default Layout;