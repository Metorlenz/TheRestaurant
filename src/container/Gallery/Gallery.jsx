import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { motion } from "framer-motion";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.scss";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    direction === "left"
      ? (current.scrollLeft -= 300)
      : (current.scrollLeft += 300);
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <motion.h1
          initial={{ opacity: 0, scale: 0, y: "-50%" }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="headtext__cormorant"
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0, y: "-50%" }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="p__opensans"
          style={{ color: "#AAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </motion.p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
