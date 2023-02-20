import classes from "./Gallery.module.css";
import React from "react";
import Background from "../../UI/Background";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <Background className={classes.eventBox}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            // src="assets/GalleryImages/gallery-vector-trans.svg"
            src="assets/teaser.png"
            alt="Gallery"
          />
        </div>

        <div className={classes.headingBox}>
          <h3 className={classes.heading}>TechnoVision Teasers</h3>
          <p className={classes.para}>
          Get a glimpse of the exciting events and activities offered by each department by visiting the "Teasers" section on our website.
          Get ready for a fantastic TechnoVision experience!
          </p>

          <Link
            to="/teasers"
            className={classes.btn}
            rel="noopener noreferrer"
          >
            Watch the Teasers
          </Link>
        </div>
      </Background>
    </section>
  );
};

export default Gallery;
