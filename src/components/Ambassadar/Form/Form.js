import classes from "./Form.module.css";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const Form = (props) => {
  const [open, setOpen] = useState(false);
  const [fullName, setfullName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNo, setNumber] = useState();
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [finalId, setFinalID] = useState("");
  const [flag, setFlag] = useState(false);

  const nameHandler = (event) => {
    setfullName(event.target.value);
  };

  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const numberHandler = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    setID("TV" + Math.floor(Math.random() * 100000));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    let checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkboxes.length === 0) {
      alert("Please select at least 1 event");
    } else {
      checkboxes.forEach((checkbox) => {
        arr.push(checkbox.value);
      });
      console.log(arr);
      const docRef = doc(db, `participants/${id}`);
      setDoc(docRef, {
        id: id,
        name: fullName,
        email: mail,
        phoneNo: phoneNo,
        dept: dept,
        year: year,
        events: arr,
      }).then(() => {
        console.log("Saved");
        setDept("");
        setMail("");
        setNumber("");
        setYear("");
        setfullName("");
        setFlag(true);
        setFinalID(id);
      });
    }
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      {flag === false ? (
        <div className={classes.backdrop}>
          <div className={classes.bkdHeadingBox}>
            <h3 className={classes.bkdHeading}>
              Register for TechnoVision Events
              <p className={classes.input}>Registration ID: {id}</p>
            </h3>
            <div onClick={props.onClick} className={classes.close}>
              <FontAwesomeIcon icon={faXmark} size="3x" />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes.inputBox}>
              <input
                placeholder="Full Name"
                type="text"
                className={classes.input}
                onChange={nameHandler}
                value={fullName}
                required
              />
              <input
                placeholder="Email"
                type="email"
                className={classes.input}
                onChange={mailHandler}
                value={mail}
                required
              />
              <input
                placeholder="Phone number"
                type="tel"
                className={classes.input}
                onChange={numberHandler}
                value={phoneNo}
                required
              />
              {/* DEPARTMENTS */}
              <input
                type="text"
                name="departments"
                placeholder="Enter your Department"
                onChange={(e) => setDept(e.target.value)}
                className={classes.input}
              />
              {/* YEAR */}
              <input
                type="text"
                onChange={(e) => setYear(e.target.value)}
                className={classes.input}
                id="year"
                name="year"
                placeholder="Enter your Year"
              />
              <div></div>
            </div>
            {/* EVENTS */}
            <button className={classes.btn1} onClick={() => setOpen(!open)}>
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className={classes.backdrop}>
          <div className={classes.bkdHeadingBox}>
            <h3 className={classes.bkdHeading}>
              Thank You for Registering at TechnoVision!!
              <p className={classes.input}>Registration ID: {finalId}</p>
              <p
                className={classes.input}
                style={{ color: "red", fontWeight: "bold" }}
              >
                Please take a screenshot of this id
              </p>
            </h3>
            <div onClick={props.onClick} className={classes.close}>
              <FontAwesomeIcon icon={faXmark} size="3x" />
            </div>
          </div>
        </div>
      )}
    </Backdrop>
  );
};

export default Form;
