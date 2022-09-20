import React, {useState, useEffect, useContext} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Discord } from "../SVG/Discord";
import { Facebook } from "../SVG/Facebook";
import { Twitter } from "../SVG/Twitter";
import { DiscordRed } from "../SVG/Discord copy";
import { FacebookRed } from "../SVG/Facebook copy";
import { TwitterRed } from "../SVG/Twitter copy";
import Menu from "./Menu";
import {PageHandlerContext} from "../../providers/Index";

// gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const [open, setopen] = useState(false);
  const PageHandlerData = useContext(PageHandlerContext);

  useEffect(() => {
    if(PageHandlerData.pageHandler === 'main page') {
      gsap.fromTo(
          ".nl",
          {
            marginLeft: "-100px",
            opacity: 0,
          },
          {
            duration: 1,
            ease: "none",
            marginLeft: "0px",
            opacity: 1,
            scrollTrigger: {
              trigger: ".t1",
              start: "top center-=100",
              end: "top center-=100",
              // markers: true,
              scrub: 1,
              toggleActions: "play none none none",
            },
          }
      );
      gsap.fromTo(
          ".nr",
          {
            marginRight: "-100px",
            opacity: 0,
          },
          {
            duration: 1.5,
            ease: "none",
            marginRight: "0px",
            opacity: 1,
            scrollTrigger: {
              trigger: ".t1",
              start: "top center-=100",
              end: "top center-=100",
              // markers: true,
              scrub: 1,
              toggleActions: "play none none none",
            },
          }
      );
    }

  }, [PageHandlerData])


  return (
    <>
      {" "}
      <header className="header" id="header1">
        <div
          className={open ? "header__menu header__open" : "header__menu nl"}
          onClick={() => setopen(!open)}
        >
          <div />
          <div />
          {/* <div /> */}
        </div>

        <nav className="header__nav nr" id="structure-header">
          <a href="">
            <Discord />
          </a>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Twitter />
          </a>
          <div className="header__nav-play">PLAY GAME</div>
        </nav>
      </header>
      <header className="header header-red" id="header2">
        <div
          className={open ? "header__menu2 header__open" : "header__menu2"}
          onClick={() => setopen(!open)}
        >
          <div />
          <div />
          {/* <div /> */}
        </div>

        <nav className="header__nav" id="structure-header">
          <a href="">
            <DiscordRed />
          </a>
          <a href="">
            <FacebookRed />
          </a>
          <a href="">
            <TwitterRed />
          </a>
          <div className="header__nav-play2">PLAY GAME</div>
        </nav>
      </header>
      <Menu open={open} setopen={setopen} />
    </>
  );
};

export default Header;
