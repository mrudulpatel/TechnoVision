import classes from "./Ambassadar.module.css";
// import Mobile from "./Mobile.svg";
import Form from "./Form/Form";

import { useState } from "react";
import Background from "../../UI/Background";
import { useNavigate } from "react-router-dom";

const Ambassadar = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <section id="register" className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>TechnoVision Event Registration</h3>
          <p className={classes.para}>
          Ready to take part in the biggest technological event of the year? Registering for TechnoVision is quick and easy. 
          Simply visit this "Registration" section of our website, fill out the required details and select the events you would 
          like to participate in. Hurry, as spots are limited and will be allotted on a first-come, first-serve basis.
           Don't miss out on this incredible opportunity to showcase your talents and network with others who share your passion for technology.
            Register now and join us at TechnoVision !!!
          </p>

          <button className={classes.btn} onClick={() => navigation("/events/cs")}>
            Register Now !
          </button>
        </div>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Ambassador/Mobile.svg"
            alt="Ambassador"
          />
        </div>
      </Background>

      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default Ambassadar;
