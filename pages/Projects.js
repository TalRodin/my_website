import Layout from '../components/Layout';
import Link from 'next/link';
import SingleProjectView from '../components/SingleProjectView'
import {loadFirebase} from '../lib/db'
import 'isomorphic-fetch'

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
        project_github_link: 'red_project_one',
        title: "Weather App React",
        image: '/game_of_life.png',
        technologies: "React, API, CSS, HTML",

    },
    {
        id: 3,
        project_github_link: 'red_project_one',
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
        project_github_link: 'red_project_one',
        title: "Weather App React",
        image: '/game_of_life.png',
        technologies: "React, API, CSS, HTML",

    },
    {
        id: 6,
        project_github_link: 'red_project_one',
        title: "Number game",
        image: '/game_of_life.png',
        technologies: "JavaScript, CSS, HTML",

    }

]
// const Projects = () =>(
class Projects extends React.Component{  
    static async getInitialProps(){
        let firebase = await loadFirebase()
        console.log(firebase)
        let result = await new Promise((resolve, reject)=>{
            firebase.firestore().collection('projects')
                    .get()
                    .then(snapshot=>{
                        let data=[]
                        snapshot.forEach(doc=>{
                            data.push(Object.assign({
                                id:doc.id
                            }, doc.data()))
                        })
                        resolve(data)
                    })
                    .catch(function(error){
                        console.error("Error adding document: ", error);
                    })
        })
        return {projects: result}

    }


    render(){
        console.log(this)
    return (<Layout>
       
        <div className='background_body'>
        <div className='svg_wave'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8e7e8" fill-opacity="0.5" d="M0,320L48,277.3C96,235,192,149,288,133.3C384,117,480,171,576,176C672,181,768,139,864,138.7C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>         </div> 
        
            <h4>Projects</h4>
            <div className='row'>
            
                {this.props.projects.map(project=>(
                    
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
                border-radius:1rem;
                width:90%;
                height:auto;
                // background-color:#eee;
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
                // background-color:#efeeee;
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
} }
export default Projects