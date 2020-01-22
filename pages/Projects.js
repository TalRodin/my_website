import Layout from '../components/Layout';
import Link from 'next/link';
import SingleProjectView from '../components/SingleProjectView'

const arrayOfProjects = [
    {
        id: 1,
        project_github_link: 'red_project_one',
        title: "Game of Life",
        image: '/game_of_life.png',
        technologies: "JavaScript, HTML, CSS",

    },
    {
        id: 2,
        project_github_link: 'red_project_two',
        title: "Weather App React",
        image: '/game_of_life.png',
        technologies: "React, API, CSS, HTML",

    },
    {
        id: 3,
        project_github_link: 'red_project_two',
        title: "Number game",
        image: '/game_of_life.png',
        technologies: "JavaScript, CSS, HTML",

    },
    {
        id: 4,
        project_github_link: 'red_project_one',
        title: "Game of Life",
        image: '/game_of_life.png',
        technologies: "JavaScript, HTML, CSS",

    },
    {
        id: 5,
        project_github_link: 'red_project_two',
        title: "Weather App React",
        image: '/game_of_life.png',
        technologies: "React, API, CSS, HTML",

    },
    {
        id: 6,
        project_github_link: 'red_project_two',
        title: "Number game",
        image: '/game_of_life.png',
        technologies: "JavaScript, CSS, HTML",

    }

]
const Projects = () =>(
    
    <Layout>
       
        <div className='background_body'>
            <h4>Projects</h4>
            <div className='row'>
            
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
                flex-wrap: wrap;
                justify-content: center;
                display: flex;
                margin-left: auto;
                margin-right: auto;
                margin-top:50px;
                margin-bottom:50px;
                border-radius:4px;
                width:90%;
                height:auto;
                background-color:#efeeee;
                box-shadow: 6px 6px 16px rgb(209,205,199,0.5), -6px -6px 16px  rgba(255,255,255, 0.5);
            }
            .background_body{
                background-color:#efeeee;
                background-size: 100px 100px;
                background-position: 0 0, 50px 50px;
                flex-wrap: wrap;
                


	box-sizing: border-box;
            }
            .row{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 5px;
                margin-left: 15%;
                margin-right: 15%;
            }
          
            `}
            </style>
        </div>
    </Layout>
)
export default Projects