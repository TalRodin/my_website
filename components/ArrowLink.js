import Link from 'next/link'

const ArrowLink = () =>{
    return (
        <div className="arrow">
            <Link href='/#contact'><img src={`icons8-up-down-arrow-80.png`} width={30} height={30}/></Link>
        <style jsx>
           {`
            position:absolute;
            top:90%;
            margin-left:50%;
            cursor: pointer;
            `} 
        </style>
        </div>
    )}
export default ArrowLink