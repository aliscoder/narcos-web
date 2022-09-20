import React, { useEffect } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
const Bullet: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.to(".box", {
  //     scrollTrigger: {
  //       trigger: ".flex",
  //       pin: true,
  //       markers: true,
  //       scrub: 1,
  //       start: "center center",
  //       end: "+=500 center",
  //     },
  //     y: "-130px",
  //     fontSize: "38px",
  //     ease: "back.out(4)",
  //   });
  //   gsap.fromTo(
  //     ".bullet-1",
  //     {
  //       x: -900,
  //     },
  //     {
  //       scrollTrigger: {
  //         trigger: ".flex",
  //         pin: true,
  //         markers: true,
  //         scrub: 1,
  //         start: "center center",
  //         end: "+=500 center",
  //       },
  //       x: 300,
  //     }
  //   );
  // }, []);

  return (
    <section className="bullet">
      <div className="bullet__main flex">
        <div className="bullet__title box">You can’t do shit</div>
        <div className="bullet__narcosland-typo ">WITHOUT MY PERMISSION</div>
        {/* <img src="/images/bullet-1.png" className="bullet-1" /> */}
      </div>
    </section>
  );
};

export default Bullet;
