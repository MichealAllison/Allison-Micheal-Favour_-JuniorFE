import FooterLogo from "../../assets/images/LOGO.png";
import SocialIcon1 from "../../assets/images/new-twitter.png";
import SocialIcon2 from "../../assets/images/linkedin-02.png";
import SocialIcon3 from "../../../assets/images/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={FooterLogo} alt="" />
        <div className="social_icon">
          <img src={SocialIcon1} alt="" />
          <img src={SocialIcon2} alt="" />
          <img src={SocialIcon3} alt="" />
        </div>
      </div>
      <div className="footer__links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
    </div>
  );
};

export default Footer;
