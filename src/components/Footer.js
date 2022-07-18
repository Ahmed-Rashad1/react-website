import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          you can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="sign-up">How it works</Link>
            <Link to="/">Testimonilas</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="sign-up">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Video</h2>
            <Link to="sign-up">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="sign-up">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              REACT <i className="fab fa-react"></i>
            </Link>
          </div>
          <small className="website-rights">REACT CopyRight 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com/a7medra4aad/" }}
              target="_blank"
              aria-label="Facebook"
              rel="noopener"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{ pathname: "https://www.instagram.com/_a7medrashad/" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to={{
                pathname:
                  "https://www.youtube.com/channel/UCjodVbJrvwLndiJYGWC9C-A",
              }}
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link github"
              to={{ pathname: "https://github.com/a7med-rashad" }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={{
                pathname: "https://www.linkedin.com/in/ahmed-rashad-1771a9189/",
              }}
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
