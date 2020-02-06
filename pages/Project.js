import React from 'react'
import { useRouter } from 'next/router';
import { render } from 'react-dom';
// class Project extends React.Component {
const Project = () => { 
    
    // static getInitialProps({ query }) {
    //     return { id: query.id }
    //   }
    // render(){
        const router = useRouter();
        const { id, title } = router.query
        return(
            <div>
      <h1>{title}</h1>
      <h1>{id}</h1>
      
    </div>
            
        )
    // }
}

export default Project
