import classes from "./Form.module.css";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import db from "./firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import jsPDF from "jspdf";
import ReceiptBook from "./receiptbook.png";
import { Download } from "@mui/icons-material";
import { Dialog } from "@mui/material";

const Form = (props) => {
  const [open, setOpen] = useState(false);
  const [fullName, setfullName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNo, setNumber] = useState();
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [finalId, setFinalID] = useState("");
  const [image, setImage] = useState("");
  const [flag, setFlag] = useState(false);
  const [receiptId, setReceiptId] = useState("");
  const [college, setCollege] = useState("");

  const nameHandler = (event) => {
    setfullName(event.target.value);
  };

  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const numberHandler = (event) => {
    setNumber(event.target.value);
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
    setID("TechVi" + Math.floor(Math.random() * 100000));
    setReceiptId(Math.floor(Math.random() * 100000));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Calling handleSubmit");
    const docRef = doc(db, `${sessionStorage.getItem("eventName")}/${id}`);
    setDoc(docRef, {
      id: id,
      name: fullName,
      email: mail,
      phoneNo: phoneNo,
      dept: dept,
      year: year,
      college: college,
      image: image,
      amount: sessionStorage.getItem("amount"),
      receiptId: receiptId,
      timestamp: serverTimestamp(),
    }).then(() => {
      console.log("Data uploaded");
      generatePdf();
      // console.log("Saved");
      // setDept("");
      // setMail("");
      // setNumber("");
      // setYear("");
      // setfullName("");
      // setImage("");
      // setReceiptId("");
      // setFlag(true);
    });
  };

  const generatePdf = () => {
    console.log("Generating PDF");
    const pdf = new jsPDF("landscape", "px", ["2339", "1655"]);
    pdf.addImage(
      ReceiptBook,
      0,
      0,
      pdf.internal.pageSize.width,
      pdf.internal.pageSize.height
    );
    pdf.setFontSize(100);
    pdf.text(744, 540, `${receiptId}`);
    pdf.setFontSize(70);
    pdf.text(587, 646, `${id}`);
    pdf.text(451, 766, `${fullName}`);
    pdf.text(239, 1161, `${sessionStorage.getItem("eventName")}`);
    pdf.text(1727, 1161, `${sessionStorage.getItem("amount")}`);
    pdf.setFontSize(60);
    pdf.text(85, 1272, "Please Note:");
    pdf.text(85, 1352, "1.) This amount is non-refundable");
    pdf.text(
      85,
      1432,
      "2.) There is a surprise gift for winner and runners up"
    );
    pdf.setTextColor("blue");
    pdf.textWithLink(
      "Join the TechnoVision 2023 Community (Click on this link)",
      85,
      1512,
      {
        url: "https://chat.whatsapp.com/B9Kx2ux1ftf3rOfUeH5oDG",
      }
    );
    const textWidth = pdf.getTextWidth(
      "Join the TechnoVision 2023 Community (Click on this link)"
    );
    pdf.line(85, 1522, 85 + textWidth, 1522);
    pdf.save(`${id}.pdf`);
    setOpen(false);
    setFlag(true);
    setFinalID(id);
    console.log("Generated PDF");
  };

  return (
    // <Backdrop
    //   sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //   open={true}
    // >
    <Dialog
      maxWidth="md"
      open={true}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: "100%",
      }}
    >
      {flag === false ? (
        <div className={classes.backdrop}>
          <div className={classes.bkdHeadingBox}>
            <h3 className={classes.bkdHeading} style={{ color: "white" }}>
              Register for {sessionStorage.getItem("eventName")}
              <p className={classes.input}>Registration ID: {id}</p>
              <p className={classes.input}>Receipt No.: {receiptId}</p>
            </h3>
            <div onClick={props.onClick} className={classes.close}>
              <FontAwesomeIcon icon={faXmark} color="white" size="3x" />
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
                required
              />
              {/* College Name */}
              <input
                type="text"
                name="college"
                placeholder="Enter your College Name"
                onChange={(e) => setCollege(e.target.value)}
                className={classes.input}
                required
              />
              {/* YEAR */}
              <input
                type="text"
                onChange={(e) => setYear(e.target.value)}
                className={classes.input}
                id="year"
                name="year"
                placeholder="Enter your Year"
                required
              />
              <div>
                <label className={classes.input} htmlFor="file">
                  Upload Screenshot of Receipt
                </label>
                <input
                  placeholder="Upload Photo of Receipt"
                  type="file"
                  id={"file"}
                  accept="image/*"
                  className={classes.input}
                  onChange={handleImage}
                  required
                />
              </div>
            </div>
            <div className={classes.input}>
              Instructions <br />
              1.) It is mandatory to fill out all details <br />
              2.) After clicking on the "click to pay" button, a QR code will be
              downloaded, and you must pay using that QR code only <br />
              3.) Upload a screenshot of your payment once it has been completed
              <br />
              4.) Image file size should be less than 500kB
            </div>
            <a
              download={true}
              style={{ textDecoration: "none", alignItems: "center" }}
              href={sessionStorage.getItem("qr")}
              role="button"
              className={classes.btn1}
            >
              <Download fontSize="20px" />
              {"  "}Payment QR Code
            </a>
            <button
              className={classes.btn}
              // onClick={() => {
              //   setOpen(false);
              //   handleSubmit();
              // }}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className={classes.backdrop}>
          <div className={classes.bkdHeadingBox}>
            <h3 className={classes.bkdHeading} style={{ color: "white" }}>
              Thank You for Registering at TechnoVision!!
              <p className={classes.input}>Registration ID: {finalId}</p>
              <p className={classes.input}>Receipt ID: {receiptId}</p>
            </h3>
            <div onClick={props.onClick} className={classes.close}>
              <FontAwesomeIcon icon={faXmark} color="white" size="3x" />
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default Form;
