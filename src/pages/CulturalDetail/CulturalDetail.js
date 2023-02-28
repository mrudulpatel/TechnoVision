import { useParams } from "react-router-dom";
import classes from "./EventDetail.module.css";
import Background from "../../UI/Background";
import CulturalLists from "./CulturalLists";
import { useState } from "react";
import Form from "./Form/Form";

const CulturalDetail = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  console.log(params.id);

  const culturalDetail = CulturalLists.filter(
    (event) => params.id.replaceAll("%20", " ") === event.heading
  );

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={culturalDetail[0]?.imgSrc}
              alt={culturalDetail[0].heading}
            />
          </div>
          <div className={classes.scrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{culturalDetail[0].heading}</h3>
              <p className={classes.para}>{culturalDetail[0].para}</p>
              <h3 className={classes.heading}>Prize Money</h3>
              <h3 className={classes.heading} hidden={params.id === "egaming" ? true : false}>
                1<sup>st</sup> Prize - ₹5000
              </h3>
              <h3 className={classes.heading} hidden={params.id === "egaming" ? true : false}>
                2<sup>nd</sup> Prize - ₹3000
              </h3>
              <h3 className={classes.heading} hidden={params.id === "egaming" ? false : true}>
                1<sup>st</sup> Prize - ₹3000
              </h3>
              <h3 className={classes.heading} hidden={params.id === "egaming" ? false : true}>
                2<sup>nd</sup> Prize - ₹2000
              </h3>
              <span className={classes.amount}>
                Registration fees: ₹
                <span className={classes.amount}>
                  {culturalDetail[0].regFee}
                </span>
              </span>

              <h3 className={classes.heading}>
                Contact - {culturalDetail[0].contact1}
              </h3>
              <h3 className={classes.heading}>
                Contact - {culturalDetail[0].contact2}
              </h3>

              <h3 className={classes.heading}> Rules & Guidelines</h3>
              <p className={classes.para}>{culturalDetail[0].rule1}</p>
              <p className={classes.para}> {culturalDetail[0].rule2}</p>
              <p className={classes.para}>{culturalDetail[0].rule3}</p>
              <p className={classes.para}>{culturalDetail[0].rule4}</p>
              <p className={classes.para}>{culturalDetail[0].rule5}</p>

              <button onClick={() => setOpen(!open)} className={classes.btn}>
                Register Now !
              </button>
            </div>
          </div>
        </div>
      </Background>
      {open && <Form open={open} eventName={params.id.replaceAll("%20", " ")} amount={params.amount.replaceAll("%20", ". ")} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default CulturalDetail;
