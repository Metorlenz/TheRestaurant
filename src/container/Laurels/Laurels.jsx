import React from "react";
import { motion } from "framer-motion";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.scss";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: "-50%" }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.75, type: "spring"}}
    viewport={{ once: true, amount: 0.25 }}
    className="app__laurels_awards-card flex__center"
  >
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </motion.div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <motion.h1
        initial={{ opacity: 0, scale: 0, y: "-50%" }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.25 }}
        className="headtext__cormorant"
      >
        Our Laurels
      </motion.h1>

      <motion.div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} {...award} />
        ))}
      </motion.div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
