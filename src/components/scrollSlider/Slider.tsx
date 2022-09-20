import React, { useEffect, useState, useContext } from "react";
import { gsap } from "gsap";

import { SliderBorder } from "../SVG/sliderBorder";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHandlerContext } from "../../providers/Index";

gsap.registerPlugin(ScrollTrigger);

const Slider: React.FC = () => {
  const PageHandlerData = useContext(PageHandlerContext);

  useEffect(() => {
    gsap.fromTo(
      ".c1",
      {
        background: "#F5ECE2",
        width: "11px",
        height: "12px",
        opacity: 1,
      },
      {
        duration: 1,
        background: "#F5ECE2",
        ease: "none",
        width: "12px",
        height: "12px",
        opacity: 1,
        scrollTrigger: {
          trigger: ".t1",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive || self.progress === 0
              ? PageHandlerData.setPageHandler("main page")
              : null,
        },
      }
    );
    gsap.fromTo(
      ".c1",
      {
        background: "#F5ECE2",
        width: "12px",
        height: "12px",
        opacity: 1,
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c1",
      {
        background: "#DF130D",
        width: "6px",
        height: "6px",
        opacity: 0.5,
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t3",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive
              ? PageHandlerData.setPageHandler("Coming soon")
              : null,
        },
      }
    );
    gsap.fromTo(
      ".c1",
      {
        background: "#DF130D",
        opacity: 1,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "top center-=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".c2",
      {
        background: "#F5ECE2",
        width: "6px",
        height: "6px",
        opacity: 0.5,
      },
      {
        duration: 1,
        background: "#F5ECE2",
        ease: "none",
        opacity: 0.5,
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center+=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c2",
      {
        background: "#F5ECE2",
        width: "6px",
        height: "6px",
        opacity: 1,
      },
      {
        duration: 1,
        background: "#DF130D",
        ease: "none",
        width: "12px",
        height: "12px",
        opacity: 1,
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "bottom",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive ? PageHandlerData.setPageHandler("Characters") : null,
        },
      }
    );
    gsap.fromTo(
      ".c2",
      {
        background: "#DF130D",
        width: "12px",
        height: "12px",
        opacity: 1,
      },
      {
        duration: 1,
        background: "#DF130D",
        ease: "none",
        width: "6px",
        height: "6px",
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".t3",
          start: "top center-=100",
          end: "top center-=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive
              ? PageHandlerData.setPageHandler("Coming soon")
              : null,
        },
      }
    );
    gsap.fromTo(
      ".c2",
      {
        background: "#DF130D",
        opacity: 1,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "top center-=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".c3",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        ease: "none",
        opacity: 0.5,
        width: "6px",
        height: "6px",
        // width: "12px",
        // height: "12px",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center-=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c3",
      {
        background: "#F5ECE2",
        opacity: 1,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c3",
      {
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 1,
        width: "12px",
        height: "12px",
        ease: "none",
        scrollTrigger: {
          trigger: ".t3",
          start: "top center-=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c3",
      {
        background: "#DF130D",
        opacity: 1,
        width: "12px",
        height: "12px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
        ease: "none",
        scrollTrigger: {
          trigger: ".t4",
          start: "top center-=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c3",
      {
        background: "#DF130D",
        opacity: 1,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "top center-=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c4",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c4",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c4",
      {
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 1,
        ease: "none",
        width: "12px",
        height: "12px",
        scrollTrigger: {
          trigger: ".t4",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive ? PageHandlerData.setPageHandler("Team") : null,
        },
      }
    );
    gsap.fromTo(
      ".c4",
      {
        background: "#DF130D",
        opacity: 1,
        width: "12px",
        height: "12px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t5, .t6",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c4",
      {
        background: "#DF130D",
        opacity: 1,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "top center-=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".c5",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c5",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c5",
      {
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 1,
        ease: "none",
        width: "12px",
        height: "12px",
        scrollTrigger: {
          trigger: ".t5",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive ? PageHandlerData.setPageHandler("About") : null,
        },
      }
    );
    gsap.fromTo(
      ".c5",
      {
        background: "#DF130D",
        opacity: 1,
        width: "12px",
        height: "12px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t6",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c5",
      {
        background: "#DF130D",
        opacity: 1,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "top center-=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c6",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c6",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c6",
      {
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 1,
        ease: "none",
        width: "12px",
        height: "12px",
        scrollTrigger: {
          trigger: ".t6",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive ? PageHandlerData.setPageHandler("Partner") : null,
        },
      }
    );
    gsap.fromTo(
      ".c6",
      {
        background: "#DF130D",
        opacity: 1,
        width: "12px",
        height: "12px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".c7",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c7",
      {
        background: "#F5ECE2",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#DF130D",
        opacity: 0.5,
        ease: "none",
        width: "6px",
        height: "6px",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center-=100",
          // end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".c7",
      {
        background: "#DF130D",
        opacity: 0.5,
        width: "6px",
        height: "6px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        opacity: 1,
        ease: "none",
        width: "12px",
        height: "12px",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center-=100",
          end: "center center+=100",
          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
          onToggle: (self) =>
            self.isActive || self.progress === 1
              ? PageHandlerData.setPageHandler("Contact Us")
              : null,
        },
      }
    );
    gsap.fromTo(
      ".b1",
      {
        width: "14px",
        height: "20px",
        stroke: "#F5ECE2",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b1",
      {
        width: "14px",
        height: "20px",
        stroke: "#F5ECE2",
      },
      {
        duration: 1,
        width: "0px",
        height: "0px",
        stroke: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".b2",
      {
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b2",
      {
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t3",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".b3",
      {
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t3",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b3",
      {
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t4",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".b4",
      {
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t4",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b4",
      {
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t5",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b5",
      {
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t5",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b5",
      {
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t6",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".b6",
      {
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t6",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".b6",
      {
        width: "14px",
        height: "20px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".b7",
      {
        width: "0px",
        height: "0px",
        stroke: "#DF130D",
      },
      {
        duration: 1,
        width: "14px",
        height: "20px",
        stroke: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".lo1",
      {
        background: "#F5ECE240",
        // opacity: 0.25,
      },
      {
        duration: 1,
        background: "#F5ECE240",
        ease: "none",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".lo1",
      {
        background: "#DF130D40",
        // opacity: 0.25,
      },
      {
        duration: 1,
        background: "#DF130D40",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center+=100",
          // end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".lo1",
      {
        background: "#DF130D40",
        // opacity: 0.25,
      },
      {
        duration: 1,
        background: "#DF130D40",
        ease: "none",
        scrollTrigger: {
          trigger: ".t3, .t4, .t5, .t6",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".lo1",
      {
        background: "#DF130D40",
        // opacity: 0.25,
      },
      {
        duration: 1,
        background: "#F5ECE240",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".l1",
      {
        // background: "#F5ECE2",
        width: "0px",
      },
      {
        duration: 1,
        background: "#DF130D",
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l1",
      {
        background: "#DF130D",
      },
      {
        duration: 1,
        background: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t3, .t4, .t5, .t6",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".l2",
      {
        // background: "#F5ECE2",
        width: "0px",
      },
      {
        duration: 1,
        background: "#DF130D",
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".t3",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l2",
      {
        background: "#DF130D",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l3",
      {
        // background: "#F5ECE2",
        width: "0px",
      },
      {
        duration: 1,
        background: "#DF130D",
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".t4",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l4",
      {
        // background: "#F5ECE2",
        width: "0px",
      },
      {
        duration: 1,
        background: "#DF130D",
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".t5",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l5",
      {
        // background: "#F5ECE2",
        width: "0px",
      },
      {
        duration: 1,
        background: "#DF130D",
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".t6",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l6",
      {
        width: "0px",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".l1, .l2, .l3, .l4, .l5",
      {
        background: "#DF130D",
      },
      {
        duration: 1,
        background: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=500",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".tooltip",
      {
        color: "#F5ECE2",
      },
      {
        duration: 1,
        color: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t1",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".tooltip",
      {
        color: "#F5ECE2",
      },
      {
        duration: 1,
        color: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
    gsap.fromTo(
      ".tooltip",
      {
        color: "#DF130D",
      },
      {
        duration: 1,
        color: "#DF130D",
        ease: "none",
        scrollTrigger: {
          trigger: ".t2, .t3, .t4, .t5, .t6",
          start: "top center+=100",
          end: "center center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );

    gsap.fromTo(
      ".tooltip",
      {
        color: "#DF130D",
      },
      {
        duration: 1,
        color: "#F5ECE2",
        ease: "none",
        scrollTrigger: {
          trigger: ".t7",
          start: "top center+=100",
          end: "top center+=100",

          // markers: true,
          scrub: 1,
          toggleActions: "restart none reverse reset",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="slider">
        {/*t1*/}
        <a className="title" href="#Narcosland">
          <div className="position tooltip">Main Page</div>
          <span className="slider__circle c1">
            <SliderBorder className="b1" />
          </span>
        </a>
        <span className="slider__line lo1">
          <span className="slider__line-in l1"></span>
        </span>

        {/*t2*/}
        <a className="title" href="#Characters">
          <div className="position tooltip">Characters</div>
          <span className="slider__circle c2 ">
            <SliderBorder className="b2" />
          </span>{" "}
          <span className="slider__line lo1 ">
            <span className="slider__line-in l2"></span>
          </span>
        </a>

        {/*t3*/}
        <a className="title" href="#Release-date">
          <div className="position tooltip">Coming Soon</div>
          <span className="slider__circle c3">
            <SliderBorder className="b3" />
          </span>
        </a>
        <span className="slider__line lo1">
          <span className="slider__line-in l3"></span>
        </span>

        {/*t4*/}
        <a className="title" href="#Team">
          <div className="position tooltip">Team</div>
          <span className="slider__circle c4">
            <SliderBorder className="b4" />
          </span>
        </a>
        <span className="slider__line lo1">
          <span className="slider__line-in l4"></span>
        </span>

        {/*t5*/}
        <a className="title" href="#About">
          <div className="position tooltip">About</div>
          <span className="slider__circle c5">
            <SliderBorder className="b5" />
          </span>
        </a>
        <span className="slider__line lo1">
          <span className="slider__line-in l5"></span>
        </span>

        {/*t6*/}
        <a className="title" href="#Partners">
          <div className="position tooltip">Partner</div>
          <span className="slider__circle c6">
            <SliderBorder className="b6" />
          </span>
        </a>
        <span className="slider__line lo1">
          <span className="slider__line-in l6"></span>
        </span>

        {/*t7*/}
        <a className="title" href="#Contact-us">
          <div className="position tooltip">Contact Us</div>
          <span className="slider__circle c7">
            <SliderBorder className="b7" />
          </span>
        </a>
      </div>
    </>
  );
};

export default Slider;
