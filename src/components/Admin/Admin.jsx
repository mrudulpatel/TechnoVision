import React, { useEffect, useState } from "react";
import "./Admin.css";
import db from "../../pages/CulturalDetail/Form/firebase";
import Background from "../../UI/Background";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OpenInNew } from "@mui/icons-material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Dialog } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Admin = () => {
  const [event, setEvent] = useState(" ");
  const [registrations, setRegistrations] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("email") === "mrudulpatel04@gmail.com") {
      setEvent("Battle In Style (E - GAMING)");
    } else if (
      sessionStorage.getItem("email") === "atharvakurumbhatte47@gmail.com"
    ) {
      setEvent("The Venture's Arena (i-Start)");
    } else if (sessionStorage.getItem("email") === "mukundpatel753@gmail.com") {
      setEvent("PosterNexus (Project Poster Presentation");
    } else if (
      sessionStorage.getItem("email") === "vidhiprajapati475@gmail.com"
    ) {
      setEvent("OVERDRIVE");
    } else if (
      sessionStorage.getItem("email") === "mukundchamriya110@gmail.com"
    ) {
      setEvent("BOX CRICKET");
    } else if (
      sessionStorage.getItem("email") === "mukundchamriya753@gmail.com"
    ) {
      setEvent("CADHOLIC");
    } else if (sessionStorage.getItem("email") === "jamanapatel753@gmail.com") {
      setEvent("Memory Event");
    } else if (sessionStorage.getItem("email") === "murjipatel753@gmail.com") {
      setEvent("Bridge Crafting");
    } else if (sessionStorage.getItem("email") === "rentprinter753@gmail.com") {
      setEvent("Bollywood Quiz");
    } else if (
      sessionStorage.getItem("email") === "jspmtechminds2022@gmail.com"
    ) {
      setEvent("Stranger Circuits");
    } else if (sessionStorage.getItem("email") === "minaxipatel987@gmail.com") {
      setEvent("Game of Codes");
    } else if (sessionStorage.getItem("email") === "aaryapatel0619@gmail.com") {
      setEvent("Speed Heist");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const colRef = collection(db, `${event}`);
    const q = query(colRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snap) => {
      let arr = [];
      snap.forEach((doc) => {
        arr.push({ ...doc.data() });
        console.log(doc.data());
      });
      console.log(arr);
      setRegistrations(arr);
      setLoading(false);
    });
  }, [db, event]);

  return (
    <section className="gallerySection">
      <Background className="galleryBg"></Background>
      <div className="row">
        <div className="wrapper">
          <h2 className="input">Registrations for {event}</h2>
          <input
            type="text"
            className="inputField"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by Name or Receipt Id"
          />
        </div>
        <TableContainer sx={{ maxWidth: 1500 }} component={Paper}>
          <Table sx={{ maxWidth: 1500 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#166540" }}>
              <TableRow sx={{ minHeight: "100px" }}>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Sr. No.
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Reg. ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Receipt ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Mobile Number
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Department
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Year
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
                  align="center"
                >
                  Photo
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? (
                search !== "" ? (
                  registrations
                    .filter(
                      (item) =>
                        item.name.includes(search) ||
                        item.name.toLowerCase().includes(search) ||
                        item.receiptId.toString().includes(search)
                    )
                    .map((row, i) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          // backgroundColor: "#2c6b86",
                          color: "white",
                        }}
                      >
                        <TableCell
                          align="center"
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          component="th"
                          scope="row"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          align="center"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          align="center"
                        >
                          {row.receiptId}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          align="center"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          align="center"
                        >
                          {row.phoneNo}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          align="center"
                        >
                          {row.dept}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                          align="center"
                        >
                          {row.year}
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            setSrc(row.image);
                            setOpen(true);
                          }}
                          sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                          align="center"
                        >
                          <OpenInNew />
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  registrations.map((row, i) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        // backgroundColor: "#2c6b86",
                        color: "white",
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        component="th"
                        scope="row"
                      >
                        {i + 1}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        align="center"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        align="center"
                      >
                        {row.receiptId}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        align="center"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        align="center"
                      >
                        {row.phoneNo}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        align="center"
                      >
                        {row.dept}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "16px", fontWeight: "bold" }}
                        align="center"
                      >
                        {row.year}
                      </TableCell>
                      <TableCell
                        onClick={() => {
                          setSrc(row.image);
                          setOpen(true);
                        }}
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        align="center"
                      >
                        <OpenInNew />
                      </TableCell>
                    </TableRow>
                  ))
                )
              ) : (
                <RotatingLines
                  strokeColor={"black"}
                  strokeWidth="3"
                  animationDuration="0.75"
                  width="40"
                  visible={true}
                />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {open && (
        <Dialog open={open} onClose={() => setOpen(!open)} fullWidth>
          <img src={src} alt="payment_ss" />
        </Dialog>
      )}
    </section>
  );
};

export default Admin;
