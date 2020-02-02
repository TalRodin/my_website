import Navbar from './Navbar';
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>alyonarodin</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <div>
            <Navbar/>
            {props.children}
        </div>
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Lato');  
        body
        {
            height: 100%;
            width: 100%;
            // background-image: radial-gradient(#d7ccc8 2%, transparent 2%),
            // radial-gradient(#d7ccc8 2%, transparent 2%);
            background-position: 0 0, 50px 50px;
            background-size: 100px 100px;
            color:#424242;
            height: 650px;
            width: 100%;
            background-color: #f7f7f7;
            font-family: 'Lato', sans-serif;
                }
      
        `}</style>
    </div>
)
export default Layout;