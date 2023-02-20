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
  const [amount, setAmount] = useState(parseInt(0));
  const [image, setImage] = useState("");
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
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  let base64url = "";
  const handleImage = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    else {
      const file = files[0];
      getBase64(file);
    }
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      base64url = reader.result;
      setImage(base64url);
      console.log(base64url);
    };
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
              Register for PROJECT POSTER PRESENTATION
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
              <input
                placeholder="Enter Payment Amount"
                type="file"
                accept="image/*"
                className={classes.input}
                onChange={handleImage}
                required
              />
               <p>DETAILS:</p>
            </div>
            <a
              download={true}
              style={{textDecoration:"none"}}
              href={
                "data:image/png;base64,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"
               
              }
              role="button"
              className={classes.btn1}
            >
              Click to Pay
            </a>
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
