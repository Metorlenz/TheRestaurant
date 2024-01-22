import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import SecondaryLayout from "../layout/SecondaryLayout";
import { images } from "../constants";
import { SubHeading } from "../components";

const About = () => {
  return (
    <SecondaryLayout>
      <div className="app__aboutus-content flex__center app__aboutus-content_1 ">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-10%" }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="app__aboutus-content_about"
        >
          <SubHeading title="AboutUs" />
          <h1 className="headtext__cormorant"> Who are we </h1>
          <p className="p__opensans p__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis pharetra adipiscing ultrices
            vulputate posuere tristique. In sed odio nec aliquet eu proin mauris
            et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis pharetra adipiscing ultrices
            vulputate posuere tristique. In sed odio nec aliquet eu proin mauris
            et. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button type="button" className="custom__button">
            Contact Us
          </button>
        </motion.div>
        <div className="app__wrapper_img ">
          <img src={images.About} alt="chef" />
        </div>
      </div>
      <div className="app__aboutus-content flex__center  app__aboutus-content_2">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.Vision} alt="chef" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "10%" }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="app__aboutus-content_about"
        >
          <SubHeading title="AboutUs" />
          <h1 className="headtext__cormorant"> Our Vision </h1>
          <p className="p__opensans p__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis pharetra adipiscing ultrices
            vulputate posuere tristique. In sed odio nec aliquet eu proin mauris
            et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis pharetra adipiscing ultrices
            vulputate posuere tristique. In sed odio nec aliquet eu proin mauris
            et. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button type="button" className="custom__button ab__button">
            Contact Us
          </button>
        </motion.div>
      </div>
    </SecondaryLayout>
  );
};

export default About;
