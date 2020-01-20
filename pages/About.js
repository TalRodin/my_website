import Layout from '../components/Layout';
const About = () =>(
    <Layout>
        <div>
            <h4>About me</h4>
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
        <div className="navigation-area">
            <div className="course">
               
                <h3 className="title">Skills</h3>
                <ul className="category">
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Programming languages: Python · JavaScript</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Full Stack: React · Redux · Node.js · Express</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Database: PostgreSQL (data analyses) · Sequelize · Relational Model · Normalization · Firebase</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Serverless: Heroku</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Web Design: CSS · HTML5 · Bootstrap · Material UI</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">DevOps: Webpack · npm</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Tools: VSCode · Anaconda · Git · Github · Lucid-Chart</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Testing: Postman · Mocha · Chai · Jest</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Visualization: D3.js (integration w/React) · Tableau · Plotly (Python)</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Familiar w/other programming languages: R · C++ · PHP · MATLAB</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Statistical tools: SPSS</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Project Management Process: AGILE Methodology</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Software Architectural Style: REST API</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Web Server Gateway Interface: Flask</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Experience/Knowledge: Machine Learning · NLP</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Other skills: Data Modeling and Evaluation · Building predictive models · Google OAuth · Babel · SVG · Data Structures and Algorithms</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className = "course">
            <h3 className="title">Education</h3>
                <ul className="category">
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Full Stack Academy, Software Engineering (Full Stack Development)</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">City College of New York (CUNY), Applied Mathematics (BS)</span>
                          
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Baruch College of New York (CUNY), Statistics (BA)</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="course">
            <h3 className="title">Interests</h3>
                <ul className="category">
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Snowboarding, Swimming</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Painting, Fine Art</span>
                        </a>
                    </li>
                </ul>
            </div>
        <style jsx>{
            `
            .navigation-area{
                display: flex;
                flex-direction: column;
                width: 80%;
                padding: 50px 0;
                margin: 50px auto;
                position: relative;
                overflow: hidden;
            }
            .course{
                padding-top: 3em;
                padding-left: 1em;
                margin-left: 5em;
                border-left: 1px solid rgb(239, 239, 239);
            }
            .title{
                text-transform: uppercase;
                margin-bottom: 12px;
                font-weight: 600;
                font-size: 0.8em;
                letter-spacing: 2px;
                font-family: 'Lato', sans-serif;
                color:#424242;
            }
            .category{
                display: block;
                list-style-type: disc;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                padding-inline-start: 0px;
            }
            .li_category{
                list-style: none;
            }
            .step{
                display: inline-block;
                margin-left: -2%;
                border-radius: 50%;
                transition: background 0.5s ease;
                z-index: 9999;
                width: 5px;
                height: 5px;
                border: 1px solid rgb(239, 239, 239);
                background: rgb(239, 239, 239);
                margin-top: 15px;
                position:absoulute;
            }
            .label{
                font-size: 14px;
                line-height: 1.5em;
                word-spacing: 1px;
                color: #888;
                font-family: 'Lato', sans-serif;
                width: 95%;
                padding: 0 15px;
  
            }
         `
        }
        </style>
        </div>
    </Layout>
)
export default About