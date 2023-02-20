import "./Gallery.css";
import Background from "../../UI/Background";
import React, { useEffect } from "react";
import TeaserList from "./TeaserList";
import TeaserCard from "./TeaserCard";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="gallerySection">
      <Background className="galleryBg">
        <h2 className="galleryHeading">Teasers</h2>
        {/* <div class="row">
          <div class="column">
            <div class="img-wrapper">
              <img
                src="https://raw.githubusercontent.com/TinkerHubKMCTCE/Karma-KMCT/dev/public/assets/GalleryImages/1.jpg"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/2.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/3.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/4.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/5.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
          </div>
          <div class="column">
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/6.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/7.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/8.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/9.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
          </div>
          <div class="column">
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/10.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/11.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/12.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/13.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
          </div>
          <div class="column">
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/15.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/16.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/17.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
            <div class="img-wrapper">
              <img
                src="https://github.com/TinkerHubKMCTCE/Karma-KMCT/blob/dev/public/assets/GalleryImages/15.jpg?raw=true"
                alt=""
                class="gallery-img"
              />
            </div>
          </div>
        </div> */}
        <div className="row">
          {TeaserList.map((teaser, i) => (
            <TeaserCard
              redirectLink={teaser.link}
              imgSrc={teaser.img}
              key={teaser.id}
              heading={teaser.name}
              url={teaser.src}
            />
          ))}
        </div>
      </Background>
    </section>
  );
};

export default Gallery;
