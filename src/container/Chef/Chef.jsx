import React from "react";
import {motion} from "framer-motion"
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.scss";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <motion.div 
    initial={{opacity: 0,scale:0 , y:'-50%' }}
    whileInView={{opacity: 1,scale:1 , y:0 }}
    transition={{duration:0.7}}
    viewportonc={{e:true, amount:0.25}}
    className="app__wrapper_info"
    >
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />

          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans"> Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </motion.div>
  </div>
);

export default Chef;
