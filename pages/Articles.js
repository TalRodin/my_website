import Layout from '../components/Layout';
import SingleArticleView from '../components/SingleArticleView'
import {loadFirebase} from '../lib/db'
import 'isomorphic-fetch'
import React from 'react'

class Articles extends React.Component{
    static async getInitialProps(){
        let firebase = loadFirebase()
        let result = await new Promise((resolve, reject) => {
            firebase.firestore().collection('articles')
                     .get()
                     .then(snapshot => {
                        console.log(snapshot)
                        let data = []
                        snapshot.forEach(doc => {
                            data.push(Object.assign({
                                id: doc.id
                            }, doc.data()))
                        })
                        resolve(data)
                     })
                     .catch(function(error) {
                        console.error('Error adding document: ', error);
                    })
                })
        return {articles: result}
    }
    render(){
    return (
        <Layout>
             
           
            <div className="background_body">
            <div className='back-box'></div>
            <div className='svg_wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8e7e8" fillOpacity="0.5" d="M0,224L48,192C96,160,192,96,288,64C384,32,480,32,576,42.7C672,53,768,75,864,74.7C960,75,1056,53,1152,64C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>            </div> 
                <h4>Articles</h4>
                <div>
                    {this.props.articles.map(art => (
                    <div key={art.id} className="box">
                    <SingleArticleView key={art.id} data={art} />
                    </div>
                    ))}
                </div>
                <style jsx>
                {`@import url('https://fonts.googleapis.com/css?family=Lato');
                  h4{
                    text-transform: uppercase;
                    letter-spacing: 2px;
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
                    box-shadow:
                    -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
                    -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
                    -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
                    -50px -50px 85px rgba(255,255,255, 0.07),
                    2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
                    6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
                    15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
                    50px 50px 85px rgba(0, 0, 0, 0.07);
                    }
                  .box:hover{
                    background: linear-gradient(135deg, #f7f7f7, #f7f7f7);
                    transition: all .2s ease-in-out;
                    box-shadow: inset 5px 5px 7px 5px rgba(0, 0, 0, 0.1), inset -5px -5px 7px 5px rgba(247, 251, 255, 0.6);
                    }
                  .background_body{
                    background-size: 100px 100px;
                    background-position: 0 0, 50px 50px;
                    }
                    .back-box{
                        position: absolute;
                        width: 1050px;
                        height: 1350px;
                        top: 30px;
                        right:-10px;
                        border:solid thin #c2d7df;
                        // float: inherit;
                        border-radius: 30% 70% 70% 30% / 30% 69% 31% 70% ;
                     }
                `}
                </style>
            </div>
        </Layout>
        )
    }
}
export default Articles
