import Link from 'next/link';
const SingleArticleView = (data)=>{
    return (
       <div >
           
           <h4 key={data.data.id}><span>{data.data.title}</span></h4>
           <h6 className="date-time">{data.data.date} · {data.data.time} read</h6>
           <ul className="keywords">
           {console.log(data.data.keyWords.split(', '))}
           {data.data.keyWords.split(', ').map((word,i)=>(
              <li key={i}>
                 
                  - {word}
              </li> 
           ))}
           
           </ul>
           <h6 ><a href={`articles/${data.data.article}`}>Read more on Medium </a></h6>

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
            color:#424242;
            text-align: justify;
            
            font-size: small;
            list-style: none;
         }
         .date-time{
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

            `}
        </style>
       </div>
    )
}
export default SingleArticleView 