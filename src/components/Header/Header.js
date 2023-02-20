import { useState } from "react";
import classes from "./Header.module.css";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
// import Logo from "./TV_LOGO-removebg-preview.png";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../pages/CulturalDetail/Form/firebase";
const Scroll = require("react-scroll");

const Header = () => {
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(false);
  const navigator = useNavigate();
  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(window.location.pathname);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          {/* <Drop
            activeClass={classes.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          > */}
          <div className={classes.active}>
            <img
              src={
                "data:image/png;base64,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"
              }
              alt="/"
              className={classes.logo}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/technovision-48d0a.appspot.com/o/TV_LOGO-removebg-preview.png?alt=media&token=e5be8a6e-8306-48ac-98ab-617b84741c3d"
              }
              alt="logo"
              onClick={() => navigator("/home")}
              className={classes.logo1}
            />
          </div>
          {/* </Drop> */}
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li
              className={classes.navLink}
              hidden={window.location.pathname.includes("admin") ? false : true}
            >
              <Drop
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink
                  onClick={logOut}
                  className={classes.homeLink}
                  to="/#home"
                >
                  Logout
                </HashLink>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="/#home">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li
              hidden={window.location.pathname !== "/home" ? true : false}
              className={classes.navLink}
            >
              <Drop
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#about">
                  About
                </HashLink>
              </Drop>
            </li>
            <li
              className={`${classes.dropLink}`}
              style={{ display: "flex" }}
              onClick={() => setDrop(!drop)}
            >
              {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""}Events
              <ExpandMore
                sx={{
                  display: "inline-block",
                  marginLeft: ".3rem",
                  color: "white",
                }}
                fade
              />
            </li>
            <li
              hidden={window.location.pathname !== "/home" ? true : false}
              className={classes.navLink}
            >
              <Drop
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="/superadmin">
                  Admin Register
                </HashLink>
              </Drop>
            </li>
            <li
              hidden={window.location.pathname !== "/home" ? true : false}
              className={classes.navLink}
            >
              <Drop
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#contact">
                  Contact
                </HashLink>
              </Drop>
            </li>
          </ul>

          {/* <Link target="_blank" rel="noopener noreferrer" to="/tickets">
            <button className={classes.btn}>Buy Tickets</button>
          </Link> */}

          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          {/* <Link target="_blank" rel="noopener noreferrer" to="/tickets">
            <button className={classes.btn1}>Buy Tickets</button>
          </Link> */}

          {/* Mobile Page */}

          <ul className={classes.mobileNav}>
            <li
              hidden={window.location.pathname.includes("admin") ? false : true}
            >
              <Drop
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink
                  onClick={logOut}
                  className={classes.homeLink}
                  to="/#home"
                >
                  Logout
                </HashLink>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="/#home">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li hidden={window.location.pathname !== "/home" ? true : false}>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#about">
                  About
                </HashLink>
              </Drop>
            </li>
            <li className={`${classes.mobLink}`} onClick={() => setDrop(!drop)}>
              {drop ? (
                <Dropdown
                  click={() => {
                    setDrop(!drop);
                    setMobile(!mobile);
                  }}
                />
              ) : (
                ""
              )}
              Events
              <FontAwesomeIcon
                size="sm"
                style={{
                  display: "inline-block",
                  marginLeft: ".3rem",
                  color: "white",
                }}
                icon={faArrowDown}
                fade
              />
            </li>
            <li hidden={window.location.pathname !== "/home" ? true : false}>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#ambassador">
                  Register
                </HashLink>
              </Drop>
            </li>
            <li hidden={window.location.pathname !== "/home" ? true : false}>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#contact">
                  Contact
                </HashLink>
              </Drop>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
