import { React, useState } from "react";

import "./Menu.scss";
import SecondaryLayout from "../layout/SecondaryLayout";

import { SubHeading } from "../components";
import { tables } from "../constants";

const TableCard = ({ index, name, image1, image2 }) => {
  const [isRotate, setIsRotate] = useState(false);
  const handleRotation = () => {
    setIsRotate(true);
  };

  const hideDetailsHandle = () => {
    setIsRotate(false)
  }

  return (
    <div className="menu__food">
     <div className="menu__food-title">
        <SubHeading title={name} />
      </div>
      <div className={`menu__container ${isRotate ? 'flip' : ''}`}   >
      <img
        className={`menu__menu-img-front`}
        src={image1}
        alt="menu"
        onClick={handleRotation}
      />
      <img
        className={`menu__menu-img-back `}
        src={image2}
        alt="menu"
        onClick={hideDetailsHandle}
       
      />
      </div>
     
    </div>
  );
};

const Menu = () => {
  return (
    <SecondaryLayout>
       <div className=" menu__title">
      <SubHeading title="Menu that fits you" />
      
    </div>
    <div className="menu__card">
      {tables?.map((table, index) => (
        <TableCard key={index} {...table} />
      ))}
      </div>
    </SecondaryLayout>
  );
};

export default Menu;
