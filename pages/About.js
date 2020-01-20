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
                            <span className="label">First Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Second Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Third Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Fourth Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Fifth Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Sixth Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Seventh Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Eighth Skill</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Ninth Skill</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="course">
            <h3 className="title">Education</h3>
                <ul className="category">
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">First Education</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Second Education</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Third Education</span>
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
                            <span className="label">First Interest</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Second Interest</span>
                        </a>
                    </li>
                    <li className="li_category">
                        <a>
                            <span className='step'></span>
                            <span className="label">Third Interest</span>
                        </a>
                    </li>
                </ul>
            </div>
        <style jsx>{
            `
            .navigation-area{
                display: flex;
                flex-direction: column;
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
                margin-left: 0em;
                border-radius: 50%;
                transition: background 0.5s ease;
                z-index: 9999;
                width: 5px;
                height: 5px;
                border: 1px solid rgb(239, 239, 239);
                background: rgb(239, 239, 239);
                margin-top: 15px;
            }
            .label{
                font-size: 14px;
                line-height: 1.5em;
                word-spacing: 1px;
                color: #888;
                font-family: 'Lato', sans-serif;
            }
         `
        }
        </style>
        </div>
    </Layout>
)
export default About