import Layout from '../components/Layout';
import React from 'react'
import LinkSkills from '../components/LinkSkills'
const About = () => (
    <Layout>
        <div>
            <div className = 'svg_wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dae8f5" fill-opacity="0.2" d="M0,64L60,90.7C120,117,240,171,360,202.7C480,235,600,245,720,213.3C840,181,960,107,1080,106.7C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
            <h4>About me</h4>
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


