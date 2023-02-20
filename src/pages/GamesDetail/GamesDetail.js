import { useParams } from "react-router-dom";
import classes from "./EventDetail.module.css";
import Background from "../../UI/Background";
import GamesLists from "./GamesLists";
import { useEffect, useState } from "react";
import Form from "./Form/Form";

const GamesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);

  const params = useParams();
  console.log(params.id);

  const games = GamesLists.filter((event) => params.id === event.name);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img className={classes.img} src={games[0].imgSrc} alt="poster" />
          </div>

          <div className={classes.ScrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{games[0].heading}</h3>
              <p className={classes.para}>{games[0].para}</p>
              <h3 className={classes.heading}>Prize Money</h3>
              <h3 className={classes.heading}>
                1<sup>st</sup> Prize - ₹5000
              </h3>
              <h3 className={classes.heading}>
                2<sup>nd</sup> Prize - ₹3000
              </h3>
              <h3
                hidden={games[0]?.contact1.length === 0 ? true : false}
                className={classes.heading}
              >
                Contact - {games[0].contact1}
              </h3>
              <h3
                hidden={games[0]?.contact2.length === 0 ? true : false}
                className={classes.heading}
              >
                Contact - {games[0]?.contact2}
              </h3>
              <h3 className={classes.heading}>Game Rules</h3>

              {games[0].rules.map((map) => {
                return <p className={classes.para}>{map}</p>;
              })}

              <span className={classes.amount}>
                Registration fees: ₹
                <span className={classes.amount}>{games[0].regFee}</span>
              </span>

              <a href={games[0].paymentLink}>
                <button onClick={() => setOpen(!open)} className={classes.btn}>
                  Register Now !
                </button>
              </a>
            </div>
          </div>
        </div>
      </Background>
      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default GamesDetail;
