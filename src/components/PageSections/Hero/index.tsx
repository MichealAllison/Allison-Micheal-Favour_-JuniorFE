import logo from "../../../assets/images/LOGO.png";
import RightArrow from "../../../assets/icons/rightArrow";
import menu from "../../../assets/images/menu-01.png";
import HeroImage from "../../../assets/images/heroimg.png";

const HeroSection = () => {
  return (
    <div className="banner">
      <nav className="nav_bar">
        <img className="logo" src={logo} alt="mazx_logo" />

        <img src={menu} alt="" className="menu" />
      </nav>

      <div className="hero_content">
        <div className="hero_text">
          <h1>
            Explore<span className="txt"> SpaceX </span>Rocket and Capsules
          </h1>
          <p>
            Discover the latest information about SpaceX's innovation
            Spacecraft.
          </p>
          <div className="cta">
            <a href="#">
              Get Started
              <RightArrow className="ml-2" />
            </a>
          </div>
        </div>

        <div className="hero_img">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
