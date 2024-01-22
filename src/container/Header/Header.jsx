import React from "react";
import { motion } from "framer-motion";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour" />
          <motion.h1 className="app__header_h1"
             initial={{ opacity: 0, scale: 0.5, y: "-100%"}}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.3,
       
      
        }
        }   
          >
         
            The Key to Find Dining
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            className="p__opensans"
            style={{ margin: "2rem 0" }}
          >
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </motion.p>
          <Link to="/Aboutsec">
            <button type="button" className="custom__button">
              Explore Menu
            </button>
          </Link>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="header img" />
        </div>
      </div>
    </>
  );
};

export default Header;
