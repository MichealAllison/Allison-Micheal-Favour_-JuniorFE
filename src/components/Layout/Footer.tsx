const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src="/src/assets/images/LOGO.png" alt="" />
        <div className="social_icon">
          <img src="/src/assets/images/new-twitter.png" alt="" />
          <img src="/src/assets/images/linkedin-02.png" alt="" />
          <img src="/src/assets/images/github.png" alt="" />
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
