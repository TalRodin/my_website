import Layout from '../components/Layout';
import Link from 'next/link';
import SingleArticleView from '../components/SingleArticleView'

const arrayOfArticls = [
    {
        id: 1,
        article: 'red_art_one',
        title: "Build React Project from Scratch",
        keyWords: "React, Webpack, Babel, Development and Production environment",
        date: 'Nov 3, 2019',
        time: '9 min'
    },
    {
        id: 2,
        article: 'red_art_two',
        title: "Create Database and Normalize it",
        keyWords: "Entity Relationship (ER) Diagram, Database, Normalization, Relational Model",
        date: 'Nov 12, 2019',
        time: '9 min'
    }
]
const Articles = () =>(
    <Layout>
        <div className='background_body'>
            <h4>Articles</h4>
            <div>
                {arrayOfArticls.map(art=>(
                <div key={art.id} className="box">
                    <SingleArticleView key={art.id} data={art}/>
                    
                </div>
                ))}
            </div>
            
            
            <style jsx>
                {`@import url('https://fonts.googleapis.com/css?family=Lato');
            h4{
                text-transform: uppercase;
                letter-spacing: 2px;
                font-family: 'Lato', sans-serif;
                color:#424242;
                text-align: center;
                margin-bottom:5%;
                align-text:center;
                padding: 5%;
            }
            .box{
                position: relative;
                margin-left: auto;
                margin-right: auto;
                margin-top:50px;
                margin-bottom:50px;
                border-radius:1rem;
                width:50%;
                height:auto;
                background-color:#eee;
                box-shadow:
    -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
  -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
  -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
  -50px -50px 85px rgba(0255,255,255, 0.07),
  
  2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
  6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
  15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
  50px 50px 85px rgba(0, 0, 0, 0.07);
            }
            .background_body{
                background-color:#eee;
                background-size: 100px 100px;
                background-position: 0 0, 50px 50px;
                height: 1000px;
            }
            
            `}
            </style>
        </div>
    </Layout>
)
export default Articles