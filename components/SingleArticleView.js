import React from 'react';
const SingleArticleView = (data) => {
    return (
         <div>
            <h4 key = {data.data.id}><span>{data.data.title}</span></h4>
            <h6 className="date-time">{data.data.date} · {data.data.time} read</h6>
            <ul className="keywords">
               {data.data.keyWords.split(', ').map((word, i) => (
               <li key ={i} >
                  <div className='point'></div>{word}
               </li>))}
            </ul>
            <h6 ><a href={`articles/${data.data.article}`}>Read more on Medium </a></h6>
            <style jsx>
            {`h4{
               letter-spacing: 1px;
               text-align: center;
               padding-top: 20px;
               margin-bottom: 5px;
            }
             .keywords{
               letter-spacing: 0px;
               text-align: justify;
               font-size: small;
               list-style: none;
            }
             .date-time{
               letter-spacing: 1px;
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
            `}
            </style>
         </div>
    )
}
export default SingleArticleView
