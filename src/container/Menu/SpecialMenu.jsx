import React from "react";
import {motion} from 'framer-motion'


import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.scss";

const SpecialMenu = () => (

  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you" />
      <motion.h1 
      initial={{ opacity: 0, scale: 0.5, y:"-10%"}}
      whileInView={{ opacity: 1, scale: 1, y:0}}
      viewport={{once:true, amount:0.25}}
      transition={{duration: 0.7}}
      className="headtext__cormorant"
      
      >
      Today's Special
      </motion.h1>
    </div>

    <div className="app__specialMenu-menu">
      <motion.div 
      initial={{opacity:0, scale:0.5, x:"-50%" }}
      whileInView={{opacity:1, scale:1, x:0 }}
      viewport={{once:true, amount:0.25}}
      transition={{duration:0.7}}
      className="app__specialMenu-menu_wine flex__center"
      >
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </motion.div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <motion.div 
      initial={{opacity:0, scale:0.5, x:"50%" }}
      whileInView={{opacity:1, scale:1, x:0 }}
      viewport={{once:true, amount:0.25}}
      transition={{duration:0.7}}
      className="app__specialMenu-menu_cocktails flex__center"
      

      >
        <p className="app__specialMenu-menu_heading">cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </motion.div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More{" "}
      </button>
    </div>
  </div>
);



export default SpecialMenu;
