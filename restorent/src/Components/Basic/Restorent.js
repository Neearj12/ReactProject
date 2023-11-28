import React, { useState } from "react";
import "./style.css";
import menu from "./Menuapi";
import Menucard from "../Menucard";
import Navbar from "./Navbar";

const uniquelist = [
  ...new Set(
    menu.map((currele) => {
      return currele.category;
    })
  ),"All",
];

const Restorent = () => {
  const [menudata, setmenudata] = useState(menu);
  const [menulist, setmenulist] = useState(uniquelist);
  const FilterItem = (category) => {
    if(category==='All'){
        setmenudata(menu);
        return;
    }
    const updatedlist = menu.filter((currele) => {

      return currele.category === category;
    });
    setmenudata(updatedlist);

  };

  return (
    <>
      <Navbar FilterItem={FilterItem} menulist={menulist} />
      <Menucard menudata={menudata} />
    </>
  );
};

export default Restorent;
