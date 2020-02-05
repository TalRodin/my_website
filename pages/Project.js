import React from 'react'
import { useRouter } from 'next/router';
const Project =()=> {
    
    const router = useRouter();
    const { id, title } = router.query
    console.log('----',title)
        return(
            <div>
      <h1>{title}</h1>
      <h1>{id}</h1>
      
    </div>
            
        )
    
}
// Project.getInitialProps = ({ query }) => {
//     console.log(query)
//     return {
//         project: project[query.id]
//       }
//   }
export default Project
