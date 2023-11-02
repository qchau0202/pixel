import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer data-aos="fade-down" data-aos-duration="1000">
        <div
          className="footer-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1>Contact me</h1>
          <div className="contact">
            <p>Mail: quocchau4729@gmail.com</p>
            <p>Phone number: 0932604729</p>
            <p>Address: MindX - CIJS88</p>
            <p>
              Github:{" "}
              <a
                href="https://github.com/qchau0202"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/qchau0202
              </a>
            </p>
            <div className="author center">
              <img src="/PixelLogo-removebg-preview.png" />
              <span>@Pixel 2023</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
