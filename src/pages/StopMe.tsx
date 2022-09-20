import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHandlerContext } from "../providers/Index";

const StopMe: React.FC = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  //   useEffect(() => {
  //     const tl = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: ".stop-me__main",
  //           scrub: 1,
  //           pin: ".stop-me__title",
  //           markers: true,
  //           start: "10% 50%",
  //           end: "+=400px center",
  //           toggleActions: "play none none reverse",
  //         },
  //       })
  //       .to(".stop-me__title", {
  //         scale: 1.5,
  //       });
  //   }, []);

  useEffect(() => {
    gsap.fromTo(
      bRef.current,
      { scale: 1 },
      {
        scale: 2,
        scrollTrigger: {
          trigger: aRef.current,
          // pin: bRef.current,
          // markers: true,
          scrub: 1,
          start: "center center",
          end: "bottom center",
        },
      }
    );
    ScrollTrigger.create({
      trigger: ".stopme__main",
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: ".change-header",
      start: "-100px top",
      end: "bottom top",
      toggleClass: {
        targets: "#header2",
        className: "header2",
      },
      // markers: true,
    });
    ScrollTrigger.create({
      trigger: ".change-header",
      start: "-100px top",
      end: "bottom top",
      toggleClass: {
        targets: "#header1",
        className: "header1",
      },
    });
  }, []);

  return (
    <section className="stopme t2">
      <div className="stopme__main  stopmemain" ref={aRef}>
        <div className="stopme__title stopmetitle" ref={bRef}>
          Could not stop me
        </div>
      </div>
    </section>
  );
};

export default StopMe;
