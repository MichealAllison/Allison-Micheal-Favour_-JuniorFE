const HeroSection = () => {
  return (
    <div className="banner">
      <nav className="nav_bar">
        <img
          className="logo"
          src="/src/assets/images/LOGO.png"
          alt="mazx_logo"
        />

        <img src="/src/assets/images/menu-01.svg" alt="" className="menu" />
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
              <img src="/src/assets/images/arrow-left-02.png" alt="" />
            </a>
          </div>
        </div>

        <div className="hero_img">
          <img src="/src/assets/images/heroimg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
