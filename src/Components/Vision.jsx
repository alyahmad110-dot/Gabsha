import Vector from "../assets/index-page/Vector.svg";
import visionbg from "../assets/index-page/visionbg.png";
import visionfront from "../assets/index-page/visionfront.png";

export default function Vision() {
  return (
    <div className="container">
      <div className="row vision-banner">
        <div className="col vision-left">
          <h6 id="top-txt">Our Vision</h6>

          <h1 className="sec-heading">
            Where{" "}
            <span
              style={{
                color: "#FDA31B",
                fontSize: "26px",
                fontWeight: "600",
                fontStyle: "semibold",
                fontSize: "44px",
              }}
            >
              ambition
            </span>{" "}
            meets change.
          </h1>

          <p style={{ fontSize: "16px", fontWeight: "400", color: "#5D5E71" }}>
            "Ghabsha" seeks to be a reliable reference in embodying the true
            meaning of organizing events and providing training and advertising
            services in its deep modern sense. In addition to its quest to
            become a center for advanced services at the local and global
            levels.
          </p>

          <button className="navbtn">
            Learn More <img src={Vector} alt="" />
          </button>
        </div>

        <div className="col vision-right">
          <div className="visionbg">
            <img
              style={{ borderRadius: "50px 10px" }}
              src={visionbg}
              alt="IMG"
            />
             <div className="visionfront">
            <img  style={{ borderRadius: "40px 10px" }} src={visionfront} alt="IMG" />
          </div>

          </div>

         

        </div>

      </div>

    </div>
  );
}
