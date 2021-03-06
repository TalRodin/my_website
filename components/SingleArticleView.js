import React from 'react';
const SingleArticleView = (data) => {
   
    return (
         <div>
            
            <div className='picture-box'></div>
            <img src={data.data.image} width={230} height={180}/>
            <h4 key = {data.data.id}><span>{data.data.title}</span></h4>
            <h6 className="date-time">{data.data.date} · {data.data.time} read</h6>
            <ul className="keywords">
               {data.data.keyWords.split(', ').map((word, i) => (
               <li key ={i} >
                  <div className='point'></div>{word}
               </li>))}
            </ul>
            <p>{data.data.description}</p>
            <h6 ><a href={`articles/${data.data.article}`}>Read more on Medium </a></h6>
           
            <style jsx>
            {`
            
            h4{
               letter-spacing: 1px;
               text-align: center;
               padding-top: 20px;
               margin-bottom: 5px;
            }
            p{
               font-size: small;
               text-align: justify;
               margin-left:5.5%;
               margin-right:50%;
            }
             .keywords{
               letter-spacing: 0px;
               text-align: justify;
               font-size: small;
               list-style: none;
            }
             .date-time{
               letter-spacing: 1px;
               color: #b8b5b8;
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
              color: #f7a1a2;
            }
             h6{
              padding-bottom: 4%;
            }
            .point{
              content: '';
              position: relative;
              width: 8px;
              height: 8px;
              left:-13px;
              top:13px;
              border-radius: 81px;
              background: linear-gradient(145deg, #dedede, #ffffff);
              box-shadow:  9px 9px 19px #e3e3e3, 
             -9px -9px 19px #ffffff;
            }
            img{
               position: relative;
               float: right;
               top:60px;
               right:70px;
               border-radius: 60% 35% 60% 38% / 33% 23% 77% 67%  ; 
            }
            .picture-box{
               position: absolute;
               width: 250px;
               height: 240px;
               top:30px;
               right:38px;
               border:solid thin #c2d7df;
               float: right;
               border-radius: 30% 70% 70% 30% / 30% 69% 31% 70% ;
            }
           
            `}
            </style>
         </div>
    )
}
export default SingleArticleView
