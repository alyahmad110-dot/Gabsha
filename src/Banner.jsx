import banner from "../public/banner.png";
import Vector from "../public/Vector.svg";
import Vectorblue from "../public/Vectorblue.svg";



export default function Banner() {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col">
              <p id="top-txt">Welcome to Ghabsha events and training</p>

              <h1 id="mid-txt">
                We realize your vision with clarity and{" "}
                <span style={{ color: "#FDA31B" }}>professionalism.</span>
              </h1>

              <p id="bottom-txt">
                Unforgettable events across the UAE, delivered by Ghabsha with
                high quality, precision, and creativity.
              </p>

              <div className="banner-btns">
                <button className="navbtn" >About US
                  <img src={Vector} alt="" />
                </button>
                <button
                  className="navbtn"
                  style={{ background: "#FFFFFF", color: "#29265F" }}
                >
                  Contact Us <img src={Vectorblue} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
