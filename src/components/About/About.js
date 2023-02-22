import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.aboutSec}>
      <div className={classes.about}>
        <div className={classes.details}>
          <h3 className={classes.heading}>About</h3>
          <h2 className={classes.heading1}>TechnoVision</h2>
          <p className={classes.para}>
            TechnoVision is an exciting and dynamic event hosted by{" "}
            <b>JSPM NARHE TECHNICAL CAMPUS</b> on central level that showcases
            the innovative spirit and technical skills of students from all
            departments. With events ranging from computer programming
            challenges to engineering design competitions, TechnoVision provides
            a platform for students to showcase their abilities and push the
            boundaries to their fullest.
          </p>

          <p className={classes.para}>
            This event is open to all students of JSPM Narhe
            Technical Campus, and provides a great opportunity for connecting
            and with others who share a passion for technology and innovation.
            With events like "Bridge crafting" from the Civil department, "The
            Ventures Arena" from the Computer department, "Circuit Mania" from
            the ENTC department, and "Box Cricket" from the Mechanical
            department, TechnoVision offers a wide range of opportunities for
            students to showcase their skills and talents. The events section
            below provides a complete list of all the exciting events that will
            be happening during TechnoVision, and with exciting prizes to be
            won, you definitely don't want to miss out! So why wait? Come and be
            a part of the TechnoVision experience and have an Amazing time with
            everyone!
          </p>
        </div>

        <div className={classes.composition}>
          <img
            className={classes.images}
            src="assets/About/ellipse.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
