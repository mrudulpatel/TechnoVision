import React, { useEffect, useState } from "react";
import "./Admin.css";
import db from "../../pages/CulturalDetail/Form/firebase";
import Background from "../../UI/Background";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import TableData from "../TableData/TableData";
import { RotatingLines } from "react-loader-spinner";

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let arr = [];
    // ADMINS
    if (
      sessionStorage.getItem("email") === "mrudulpatel04@gmail.com" ||
      sessionStorage.getItem("email") === "ashwinkapile2002@gmail.com" ||
      sessionStorage.getItem("email") === "atharvakurumbhatte47@gmail.com" ||
      sessionStorage.getItem("email") === "nisha.auti313@gmail.com" ||
      sessionStorage.getItem("email") === "mukundpatel753@gmail.com"
    ) {
      arr.push("Battle In Style (E - GAMING)");
      arr.push("The Venture's Arena (i-Start)");
      arr.push("PosterNexus (Project Poster Presentation)");
      arr.push("OVERDRIVE");
      arr.push("BOX CRICKET");
      arr.push("CADHOLIC");
      arr.push("Memory Event");
      arr.push("Bridge Crafting");
      arr.push("Bollywood Quiz");
      arr.push("Stranger Circuits");
      arr.push("Game of Codes");
      arr.push("Speed Heist");
      console.log(arr);
      setEvents(arr);
    }
    // Battle In Style Comp
    else if (sessionStorage.getItem("email") === "vaibhavvyas179@gmail.com") {
      arr.push("Battle In Style (E - GAMING)");
      console.log(arr);
      setEvents(arr);
    }
    // PosterNexus Comp
    else if (sessionStorage.getItem("email") === "nbhadane01@gmail.com") {
      arr.push("PosterNexus (Project Poster Presentation)");
      setEvents(arr);
    }
    // Comp Dept Head
    else if (sessionStorage.getItem("email") === "vishalsapkal974@gmail.com") {
      arr.push("PosterNexus (Project Poster Presentation)");
      arr.push("Battle In Style (E - GAMING)");
      arr.push("The Venture's Arena (i-Start)");
      setEvents(arr);
    }
    // ENTC DEPT HEAD
    else if (
      sessionStorage.getItem("email") === "sujay.patange3942@gmail.com"
    ) {
      arr.push("Stranger Circuits");
      arr.push("Game of Codes");
      arr.push("Speed Heist");
      setEvents(arr);
    }
    // Stranger Circuits ENTC
    else if (sessionStorage.getItem("email") === "shubhamshastri02@gmail.com") {
      arr.push("Stranger Circuits");
      console.log(arr);
      setEvents(arr);
    }
    // Game of Codes ENTC
    else if (sessionStorage.getItem("email") === "adittyapatil89@gmail.com") {
      arr.push("Games of Codes");
      setEvents(arr);
    }
    // Speed Heist ENTC
    else if (sessionStorage.getItem("email") === "yogmnv72@gmail.com") {
      arr.push("Speed Heist");
      setEvents(arr);
    }
    // CIVIL DEPT HEAD
    else if (sessionStorage.getItem("email") === "burleaditya2816@gmail.com") {
      arr.push("Memory Event");
      arr.push("Bridge Crafting");
      arr.push("Bollywood Quiz");
      setEvents(arr);
    }
    // MEMORY EVENT  CIVIL
    else if (sessionStorage.getItem("email") === "ksankit95@gmail.com") {
      arr.push("Memory Event");
      setEvents(arr);
    }
    // Bridge Crafting Civil
    else if (sessionStorage.getItem("email") === "udaysinghnagane@gmail.com") {
      arr.push("Bridge Crafting");
      setEvents(arr);
    }
    // Bollywood Quiz Civil
    else if (sessionStorage.getItem("email") === "adarshgodse46@gmail.com") {
      arr.push("Bollywood Quiz");
      setEvents(arr);
    }
    // MECH DEPT HEAD
    else if (
      sessionStorage.getItem("email") === "utkarshkonarde123@gmail.com"
    ) {
      arr.push("OVERDRIVE");
      arr.push("BOX CRICKET");
      arr.push("CADHOLIC");
      setEvents(arr);
    }
    // CADHOLIC Mechanical
    else if (sessionStorage.getItem("email") === "ugaleatharva2604@gmail.com") {
      arr.push("CADHOLIC");
      setEvents(arr);
    }
    // OVERDRIVE Mechanical
    else if (sessionStorage.getItem("email") === "someshterkar1999@gmail.com") {
      arr.push("OVERDRIVE");
      setEvents(arr);
    }
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   let inc = 0;
  //   let mainArr = [];
  //   events.forEach((event, index) => {
  //     const colRef = collection(db, `${event}`);
  //     console.log(colRef.path);
  //     const q = query(colRef, orderBy("timestamp", "asc"));
  //     onSnapshot(q, (snap) => {
  //       let arr = [];
  //       snap.forEach((doc) => {
  //         arr.push({ ...doc.data(), event: event });
  //         inc += 1;
  //         console.log(doc.data());
  //       });
  //       mainArr.push(arr);
  //       setLoading(false);
  //     });
  //     setRegistrations(mainArr);
  //     console.log(mainArr);
  //   });
  // }, [db, events]);

  return (
    <section className="gallerySection">
      <Background className="galleryBg"></Background>
      {!loading ? (
        events?.map((event, i) => (
          <TableData eventName={event} />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RotatingLines
            strokeColor={"white"}
            strokeWidth="3"
            animationDuration="0.75"
            width="40"
            visible={true}
          />
        </div>
      )}
    </section>
  );
};

export default Admin;
