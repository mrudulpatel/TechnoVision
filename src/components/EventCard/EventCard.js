import { Link } from "react-router-dom";
import classes from "./EventCard.module.css";

const EventCard = (props) => {
  return (
    <div className={classes.card}>
      <Link
        to={props.redirectLink}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src={props.imgSrc}
            alt="poster coming soon"
          />
        </div>
        <div
          className={
            window.location.pathname === "/home"
              ? classes.textBox1
              : classes.textBox
          }
        >
          <h3 className={classes.heading}>{props.heading}</h3>
          <Link
            hidden={window.location.pathname === "/home" ? true : false}
            className={classes.btn}
            to={props.redirectLink}
            onClick={() => {
              sessionStorage.setItem("eventName", props.heading);
              sessionStorage.setItem("amount", props.amount);
              sessionStorage.setItem("qr", props.qr);
              console.log("Saved");
            }}
          >
            Register Now
          </Link>
        </div>
        {window.location.pathname === "/home" ? (
          <>
            <br />
            <h2>Faculty: {props.faculty}</h2>
            <br />
            <h2>Student Leads:</h2>
            {props.students.map((student, i) => (
              <h2>
                {i + 1}. {student.name} - {student.mobile}
              </h2>
            ))}
          </>
        ) : null}
      </Link>
    </div>
  );
};

export default EventCard;
