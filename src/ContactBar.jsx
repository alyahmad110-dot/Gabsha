import fbicon from "../public/fbicon.png";
import instaicon from "../public/instaicon.png";
import linkedin from "../public/linkedin.png";
import twitter from "../public/twitter.png";
import locationicon from "../public/locationicon.png";
import mail from "../public/mail.png";
import phone from "../public/phone.png";

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
