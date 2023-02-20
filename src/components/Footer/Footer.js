import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
import { faNotesMedical, faVoicemail } from "@fortawesome/free-solid-svg-icons";
// const Logo1 = require("./tm logo.png");
// const Logo2 = require("./TV_LOGO-removebg-preview.png");

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.row}>
        <div className={classes.col}>
          <a href="#top">
            <img
              className={classes.karma}
              src={
                "https://firebasestorage.googleapis.com/v0/b/technovision-48d0a.appspot.com/o/TV_LOGO-removebg-preview.png?alt=media&token=e5be8a6e-8306-48ac-98ab-617b84741c3d"
              }
              alt="Technovision logo"
            />
          </a>
          <p className={classes.para}>
            The TechnoVision event, held annually by the esteemed JSPM group of
            Institutes, enables brilliant minds to develop in an interactive,
            dynamic, and enjoyable environment. It not only increases students'
            soft skills but also their technical knowledge. This event unites
            students together, providing them with a valuable opportunity to
            expand their skills and gain hands-on experience.
          </p>
        </div>

        <div className={classes.col}>
          <h3>Contact us</h3>
          <ul>
            <li>
              <p className={classes.email}>
                <u>
                  <b>Email: </b>
                </u>
                <a href="mailto:jspmtechminds2022@gmail.com">
                  jspmtechminds2022@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p className={classes.contactNo}>
                <u>
                  <b>Developers</b>
                </u>
              </p>
            </li>
            <li>
              <p className={classes.contactNo}>
                Mrudul Patel -{" "}
                <a href="https://wa.me/918698793479">8698793479</a>
              </p>
            </li>
            <li>
              <p className={classes.contactNo}>
                Atharva Kurumbhatte -{" "}
                <a href="https://wa.me/919422202294">9422202294</a>
              </p>
            </li>
            <li>
              <p className={classes.contactNo}>
                Mukund Chamriya -{" "}
                <a href="https://wa.me/917447657204">7447657204</a>
              </p>
            </li>
            <li>
              <p className={classes.contactNo}>
                Ashwin Kapile -{" "}
                <a href="https://wa.me/919370206138">9370206138</a>
              </p>
            </li>
          </ul>
        </div>

        <div className={classes.col}>
          <h3>Follow us on</h3>
          <div className={classes.socialIcons}>
            <a
              href="https://chat.whatsapp.com/B9Kx2ux1ftf3rOfUeH5oDG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faWhatsapp} />
            </a>
            {/* <a
              href="https://github.com/clubwebsiteTechTeam/MainWebsite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faLinkedin} />
            </a> */}
          </div>
          <div
            className={classes.col}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <p>Live Views: </p>{" "}
            <img
              style={{ padding: "2px" }}
              src="https://hits.serv.rs/static/t43ssmlktqfi5gejzdfyf"
              height="30"
              alt="live_views"
            />
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.copyrights}>
        <img
          alt="logo"
          src={
            "https://firebasestorage.googleapis.com/v0/b/technovision-48d0a.appspot.com/o/tm%20logo.png?alt=media&token=7cecd1b6-19c9-4583-8493-e2307a5208d1"
          }
          className={classes.logo}
        />
        <p className={classes.copyright}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://techminds-jspm.netlify.app"
          >
            &nbsp;&nbsp;TechMinds {new Date().getFullYear()}
          </a>{" "}
          | Copyright &#169; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
