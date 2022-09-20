import React, { useState, useEffect, useContext } from "react";
import { ArrowUp } from "../SVG/ArrowUp";
import About from "./About";
import News from "./News";
import Contact from "./Contact";
import Team from "./Team";
import { PageHandlerContext } from "../../providers/Index";

interface Props {
  open: boolean;
  setopen: any;
}
const Menu: React.FC<Props> = ({ open, setopen }) => {
  const PageHandlerData = useContext(PageHandlerContext);

  const menuItems = [
    { title: "NARCOSLAND", id: "#Narcosland", state: "main page" },
    { title: "Characters", id: "#Characters", state: "Characters" },
    { title: "Release date", id: "#Release-date", state: "Coming soon" },
    { title: "Team", id: "#Team", state: "Team" },
    { title: "About", id: "#About", state: "About" },
    { title: "Partners", id: "#Partners", state: "Partner" },
    { title: "CONTACT", id: "#Contact-us", state: "Contact Us" },
  ];
  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   // const layout = document.getElementById("layout");
  //   if (html) {
  //     html.style.overflow = open ? "hidden" : "unset";
  //     // layout.style.display = open ? "hidden" : "unset";
  //   }
  //   // return () => {
  //   //   if (html) html.style.overflow = "unset";
  //   // };
  // }, [open]);
  return (
    <div className={open ? "menu menu-open" : "menu"}>
      <div className="menu__container">
        <div className="menu__container--titles">
          {menuItems.map((item, i) => (
            <span
              onClick={() => setopen(false)}
              className={
                item.state == PageHandlerData.pageHandler
                  ? " menu__container--titles-item active"
                  : "menu__container--titles-item"
              }
              key={i}
            >
              <a href={item.id}>{item.title}</a>
            </span>
          ))}
        </div>
        {/* <div className="menu__container--content">
          {menuItems[active].component}
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
