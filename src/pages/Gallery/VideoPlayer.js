import React from "react";
// import YouTube from "react-youtube";
import Background from "../../UI/Background";
// import classes from "./TeaserCard.module.css";

const VideoPlayer = () => {
  // const opts = {
  //   height: "340",
  //   width: "640",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  return (
    <section
      className="gallerySection"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
      }}
    >
      <Background>
        <iframe
          width={560}
          height={350}
          style={{ marginTop: "100px" }}
          src={sessionStorage.getItem("v")}
          title={window.location.pathname.split("/")[3]}
        ></iframe>
        <h2 className="videoHeading">
          {window.location.pathname.split("/")[3].toLocaleUpperCase()}
        </h2>
      </Background>
    </section>
  );
};

export default VideoPlayer;
