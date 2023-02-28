// import { useParams } from "react-router-dom";
// import classes from "./HackathonDetail.module.css";
// import Background from "../../UI/Background";
// import hackathonLists from "./hackathonLists";
// import { useEffect, useState } from "react";
// import Form from "./Form/Form";

// const HackathonDetail = () => {
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const params = useParams();
//   console.log(params.id);

//   const hackathon = hackathonLists.filter((event) => params.id === event.name);

//   // const filteredDetail = CulturalLists.filter((event) => params.id === event.name)
//   // console.log(filteredDetail[0].name);

//   return (
//     <section className={classes.ambaSection}>
//       <Background className={classes.ambassadar}>
//         <div className={classes.tech}>
//           <div className={classes.imgBox}>
//             <img
//               className={classes.img}
//               src={hackathon[0].imgSrc}
//               alt="Desafio"
//             />
//           </div>

//           <div className={classes.ScrollBox}>
//             <div className={classes.headingBox}>
//               <h3 className={classes.heading}>{hackathon[0].heading}</h3>
//               <p className={classes.para}>{hackathon[0].para1}</p>
//               <p className={classes.para}>{hackathon[0].para2}</p>
//               <p className={classes.para}>{hackathon[0].para3}</p>
//               <p className={classes.para}>{hackathon[0].para4}</p>
//               <p className={classes.para}>{hackathon[0].para5}</p>
//               <p className={classes.para}>{hackathon[0].certiPara}</p>
//               <h3 className={classes.heading}>Rules</h3>

//               {hackathon[0].rules.map((map) => {
//                 return <p className={classes.para}>{map}</p>;
//               })}

//               <a href={hackathon[0].paymentLink}>
//                 <button onClick={() => setOpen(!open)} className={classes.btn}>
//                   Register Now !
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </Background>
//       {open && <Form open={open} onClick={() => setOpen(!open)} />}
//     </section>
//   );
// };

// export default HackathonDetail;

import { useParams } from "react-router-dom";
import classes from "./EventDetail.module.css";
import Background from "../../UI/Background";
import hackathonLists from "./hackathonLists";
import { useEffect, useState } from "react";
import Form from "./Form/Form";

const HackathonDetail = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  console.log(params.id.replaceAll("%20", " "));

  const hackathon = hackathonLists.filter((event) => params.id.replaceAll("%20", " ") === event.heading);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={hackathon[0]?.imgSrc}
              alt={hackathon[0].heading}
            />
          </div>
          <div className={classes.scrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{hackathon[0].heading}</h3>
              <p className={classes.para}>{hackathon[0].para1}</p>
              <p className={classes.para}>{hackathon[0].para2}</p>
              <p className={classes.para}>{hackathon[0].para3}</p>
              <p className={classes.para}>{hackathon[0].para4}</p>
              <p className={classes.para}>{hackathon[0].para5}</p>
              <h3 className={classes.heading}>Prize Money</h3>
              <h3 className={classes.heading}>
                1<sup>st</sup> Prize - ₹5000
              </h3>
              <h3 className={classes.heading}>
                2<sup>nd</sup> Prize - ₹3000
              </h3>
              <span className={classes.amount}>
                Registration fees: ₹
                <span className={classes.amount}>{hackathon[0].regFee}</span>
              </span>
              <br />
              <h3
                hidden={hackathon[0]?.contact1.length === 0 ? true : false}
                className={classes.heading}
              >
                Contact - {hackathon[0].contact1}
              </h3>
              <h3
                hidden={hackathon[0]?.contact2.length === 0 ? true : false}
                className={classes.heading}
              >
                Contact - {hackathon[0]?.contact2}
              </h3>
              <p className={classes.para}>{hackathon[0].certiPara}</p>
              <h3
                className={classes.heading}
                hidden={hackathon[0].rules.length === 0 ? true : false}
              >
                Rules
              </h3>
              {hackathon[0].rules.map((map) => {
                return <p className={classes.para}>{map}</p>;
              })}
              <button onClick={() => setOpen(!open)} className={classes.btn}>
                Register Now !
              </button>
            </div>
          </div>
        </div>
      </Background>
      {open && <Form open={open} amount={params.amount.replaceAll("%20", " ")} eventName={params.id.replaceAll("%20", " ")} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default HackathonDetail;
