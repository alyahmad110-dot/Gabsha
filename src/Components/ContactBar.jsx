import fbicon from "../src/assets/index-page/fbicon.png";
import instaicon from "../src/assets/index-page/instaicon.png";
import linkedin from "../src/assets/index-page/linkedin.png";
import twitter from "../src/assets/index-page/twitter.png";
import locationicon from "../src/assets/index-page/locationicon.png";
import mail from "../src/assets/index-page/mail.png";
import phone from "../src/assets/index-page/phone.png";

export default function ContactBar() {
  return (
    <div className="conatactBar">
      <div className="bg-left">
        <span style={{ color: "#FFFFFF" }}> Follow Us : </span>

        <div style={{ display: "flex", gap: "11px" }}>
          <a href="#">
            {" "}
            <img src={fbicon} alt="Facebook" />
          </a>

          <a href="#">
            {" "}
            <img src={instaicon} alt="Instagram" />
          </a>

          <a href="#">
            {" "}
            <img src={linkedin} alt="Linkedin" />
          </a>

          <a href="#">
            {" "}
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="bg-right">
        <div>
          <span className="contact-text">
            <img src={locationicon} alt="" /> Creativity Tower, Fujairah, UAE
            |{" "}
          </span>

          <a href="#" className="contact-text">
            <img src={mail} alt="" /> ghabsha.est@gmail.com |{" "}
          </a>

          <a href="#" className="contact-text">
            {" "}
            <img src={phone} alt="" /> +971 505 789 888{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
