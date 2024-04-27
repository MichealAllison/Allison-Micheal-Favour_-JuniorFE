const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src="/public/images/LOGO.png" alt="" />
        <div className="social_icon">
          <img src="/public/images/new-twitter.png" alt="" />
          <img src="/public/images/linkedin-02.png" alt="" />
          <img src="/public/images/github.png" alt="" />
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
