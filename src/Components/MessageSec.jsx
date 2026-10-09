import Message from "../../public/Message.png";
import commas1 from "../../public/commas1.png";
import commas2 from "../../public/commas2.png";

export default function MessageSec() {
  return (
    <div style={{ padding: "50px 0px" }} className="container">
      <div className="row">
        <div className="col messagesection">
          <span className="commas1">
  <img src={commas1} alt="" />

          </span>
          <div className="messagefont">
            <h2>Our Message</h2>
            <div>
              <p>
                Providing distinguished services that raise the aspiration of
                customers in various fields.
              </p>
            </div>
            <span className="commas2">

  <img src={commas2} alt="" />

            </span>


          </div>
        </div>
      </div>
    </div>
  );
}
