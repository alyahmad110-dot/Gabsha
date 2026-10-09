import Gcard1 from "../../public/gcard1.png";

export default function Goalcard({
    imgPath, 
    heading, 
    title, 
    btn
}) {
  return (
    <div className="goalCard">
    <div className="card Gcard">

<div  className='Gcardimg'>

    <img src={imgPath} alt="" />

</div>

<div className="Gcardfont">
    {heading}
</div>

<div className="Gcardpara">
 {title}

</div>

<button className="navbtn">{btn}</button>
      
    </div>

    </div>
  );
}
