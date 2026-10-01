import cardicon1 from "../assets/index-page/cardicon1.png";

export default function Card(props) {
  return (
    <div className="card">
     <div className="card-inner">
      <div>
          <img src={props.cardIcon} alt="" />{" "}
        </div>
        <div className="card-digit">{props.cardNum}</div>
     </div>

     <div>
        <h1 className="card-h">{props.cardTitle}</h1>
        <p className="card-p">{props.cardDesc}</p>
     </div>

    </div>
  );
}
