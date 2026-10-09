import callicon from "../../public/callicon.svg";
import mailicon from "../../public/mailicon.svg";
import locationicon from "../../public/locationicon.svg";

export default function ContactUs() {
  return (
    <div className="contactus">
      <div className="container">
        <div className="row">
          <div className="col culeft">
            <div>
              <p
                style={{ color: "#FDA31B", fontSize: "26px", fontStyle: "600" }}
              >
                Contact With Us
              </p>
              <h1
                style={{ color: "#FFFFFF", fontSize: "47px", fontStyle: "600" }}
              >
                Get In Touch
              </h1>
              <p
                style={{ color: "#FFFFFF", fontSize: "16px", fontStyle: "400" }}
              >
                We’d love to hear from you. Whether you’re planning a corporate
                event, exhibition, or private celebration, our team is here to
                bring your vision to life. Reach out today to start planning
                something extraordinary together.
              </p>
            </div>

<div style={{display:"flex", flexDirection:"column", gap:"28px", paddingTop:"20px"}}>
    
            <div className="cuicon">
              <div>
                <img src={callicon} alt="" />
              </div>
              <div>
                <p className="cicon-text">Have any Question?</p>
                <p className="cicon-text2">+971 505 789 888</p>
              </div>
            </div>

            <div className="cuicon">
              <div>
                <img src={mailicon} alt="" />
              </div>
              <div>
                <p className="cicon-text">Send Email</p>
                <p className="cicon-text2">ghabsha.est@gmail.com</p>
              </div>
            </div>

            <div className="cuicon">
              <div>
                <img src={locationicon} alt="" />
              </div>
              <div>
                <p className="cicon-text">Address</p>
                <p className="cicon-text2">Creativity Tower, Fujairah, UAE</p>
              </div>
            </div>
</div>




          </div>

          <div style={{display:"flex", justifyContent:"center",alignItems:"center"}} className="col">
            <div className="card cucard">

              <input className="card-placeholder" type="text" placeholder="Name" />
              <input className="card-placeholder" type="email" placeholder="Email" />
              <input className="card-placeholder" type="number" placeholder="Phone Number" />
              <input style={{paddingBottom:"150px"}} className="card-placeholder" type="text" placeholder="Message" />


              <button className="navbtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
