import Vectororange from '../../public/Vectororange.svg'
import scard1 from '../../public/scard1.png'


export default function VisionCard (props){
    return(
        <div className='serviceCard'>
     
         <div className="card Scard">
        
        <div  className='Scardimg'>
        
            <img src={props.icon} alt="" />
        
        </div>
        
        <div className="Scardfont">
           {props.heading}
        </div>
        
        <div className="Scardpara">
{props.discription}

        
        </div>
        
        <button className='Scardbutton'>{props.button} <img src={Vectororange} alt="" /></button>
              
            </div>

</div>
       
    )
}