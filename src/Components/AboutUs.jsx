import Aboutusicon from "../../public/Aboutusicon.png";
import Aboutusicon2 from "../../public/Aboutusicon2.png";
import callicon from "../../public/callicon.png";
import Vector from "../../public/Vector.svg";
import aboutimg1 from "../../public/aboutimg1.png";
import aboutimg2 from "../../public/aboutimg2.png";
import aboutimg3 from "../../public/aboutimg3.png";

export default function AboutUs() {
  return (
    <div style={{marginTop:"100px"}} className="container">
      <div className="row">
        <div className="col about-left">
          <div className="left-img">

            <img style={{borderRadius:"15px 40px"}} src={aboutimg1} alt="" />

            <div className="about-txt">
            {" "}
            <h1>30 +</h1>
            <p>Years Of </p>
            <p> Quality Service</p>
          </div>
          </div>

          <div className="right-img">

            <img src={aboutimg2} alt="" />
            <img src={aboutimg3} alt="" />

          </div>


          
        </div>

        <div className="col about-right">
          <h3 id="top-txt">About Us</h3>

          <h1 className="sec-heading">
            We transform your ideas into{" "}
            <span
              style={{
                color: "#FDA31B",
                fontSize: "26px",
                fontWeight: "600",
                fontStyle: "semibold",
                fontSize: "44px",
              }}
            >
              inspiring
            </span>{" "}
            events
          </h1>

          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            Ghabsha is one of the UAE’s leading institutions, specializing in
            event and conference organization, vocational and administrative
            training, and advertising services. With a creative and professional
            approach, we help individuals and organizations communicate
            effectively and make a lasting impact. Our motto,{" "}
            <span style={{ color: "#393C7D" }}>“Excellence First,”</span> drives
            everything we do.
          </p>

          <div className="about-icons">
            <div className="icon-sty">
              <div>
                <img src={Aboutusicon} alt="" />
              </div>
              <div className="icon-txt-sty">
                <p className="icon-txt">Complete Service Range:</p>
                <p className="icon-txt-2">
                  From events to training and advertising, we handle it all.
                </p>
              </div>
            </div>

            <div className="icon-sty">
              <div>
                <img src={Aboutusicon2} alt="" />
              </div>
              <div>
                <p className="icon-txt">Client-Centered Approach:</p>
                <p className="icon-txt-2">
                  We blend professionalism and creativity to achieve success.
                </p>
              </div>
            </div>
          </div>

          <div className="aboutus-bottom">
            <div>
              {" "}
              <button className="navbtn">
                Contact US <img src={Vector} alt="" />
              </button>
            </div>
            <div>
              <img src={callicon} alt="" />
            </div>
            <div style={{ color: "#393C7D" }}>
              {" "}
              <span
                style={{
                  color: "#FDA31B",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Call Now:
              </span>
              +971 505 789 888
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
