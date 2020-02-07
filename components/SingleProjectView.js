import Link from 'next/link';

const SingleProjectView = (data)=>{
   console.log(data)
    return (
       <div >
           <div className='imgs'>
           <img src={data.data.image} width={230} height={180}/>
           </div>
           <h4 ><span>{data.data.title}</span></h4>
           <h5 key={data.data.id}>{data.data.technologies}</h5>
           <a href={`projects/${data.data.project_github_link}`}><img src={`/github-brand-logo-47401.png`} width={30} height={30}/></a>
           <a href={`projects/${data.data.project_github_link}`}><img src={`/youtube-brand-logo-47403.png`} width={30} height={30}/></a>
        
           <Link as={`/project/${data.data.id}/${data.data.title}`} href={`/project?id=${data.data.id}&title=${data.data.title}`} ><a>{data.data.id}</a></Link>
          
           {/* <Link href={`/project?id=${data.data.id}`} as={`/project/${data.data.id}`}></Link> */}
           <style jsx>
        {`h4{
                letter-spacing: 1px;
                font-family: 'Lato', sans-serif;
                color:#424242;
                text-align: center;
        
                padding-top: 20px;
                margin-bottom: 5px;
            }
         .keywords {
            letter-spacing: 1px;
            font-family: 'Lato', sans-serif;
            color:#e8e7e8;
            text-align: justify;
            
            font-size: small;
            list-style: none;
         }
         h5{
            letter-spacing: 1px;
            font-family: 'Lato', sans-serif;
            color: #bdbdbd;
            text-align: center;
            padding: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
         }
         a{
            text-decoration: none;
            font-family: 'Lato', sans-serif;
            padding-bottom: 15px;
            padding-left: 37px;
            color: #bdbdbd;
         }
         h6{
            padding-bottom: 4%;
            
         }
         img{
             margin:10px;
             margin-top:30px;
             border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;
             
         }
            `}
        </style>
       </div>
    )
}
export default SingleProjectView 