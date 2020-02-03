import Layout from '../components/Layout';
import React from 'react'
import LinkSkills from '../components/LinkSkills'
const About = () => (
    <Layout>
        <div>
            <div className = 'svg_wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8e7e8" fill-opacity="0.5" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,106.7C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>            </div>
            <h4>About</h4>
            <LinkSkills />
            <style jsx>
                {`@import url('https://fonts.googleapis.com/css?family=Lato');
                    h4{
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-family: 'Lato', sans-serif;
                        color:#424242;
                        text-align: center;
                    }`}
            </style>
        
        

        </div>
    </Layout>
)
export default About


