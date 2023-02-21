// import { useEffect, useRef } from "react";
import classes from "./Hero.module.css";
// import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import Form from "../Ambassadar/Form/Form";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading2}>JSPM NARHE TECHNICAL CAMPUS</h1>
          <p className={classes.heading2}>Proudly Presents</p>
          <h1 className={classes.heading}>TechnoVision 2023</h1>
          <h4 className={classes.caption}>What goes around comes around</h4>
          <br />
          <p className={classes.date}>MAR 1, 2023</p>
          <Countdown
            className={classes.heading2}
            date={new Date("2023-03-01")}
          />
          <br />
        </div>
      </div>
      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default Hero;
