import Layout from '../components/Layout';
import Link from 'next/link';
import SingleProjectView from '../components/SingleProjectView'

const arrayOfProjects = [
    {
        id: 1,
        project_github_link: 'red_project_one',
        title: "Game of Life",
        image: "public/game_of_life.png",
        technologies: "JavaScript, HTML, CSS",

    },
    {
        id: 2,
        project_github_link: 'red_project_two',
        title: "Weather App React",
        image: "public/game_of_life.png",
        technologies: "React, API",

    }
]
const Projects = () =>(
    <Layout>
        <div className='background_body'>
            <h4>Projects</h4>
            <div>
                {arrayOfProjects.map(project=>(
                <div key={project.id} className="box">
                    <SingleProjectView key={project.id} data={project}/>
                    
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
                border-radius:4px;
                width:50%;
                height:auto;
                background-color:#efeeee;
                box-shadow: 6px 6px 16px rgb(209,205,199,0.5), -6px -6px 16px  rgba(255,255,255, 0.5);
            }
            .background_body{
                background-color:#efeeee;
                background-size: 100px 100px;
                background-position: 0 0, 50px 50px;
                height: 1000px;
            }
            
            `}
            </style>
        </div>
    </Layout>
)
export default Projects