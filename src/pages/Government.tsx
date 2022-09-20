import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
const Government: React.FC = () => {
  const mainRef = useRef(null);
  const tRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // let tl = gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: mainRef.current,
    //       scrub: 0.5,
    //       // pin: tRef.current,
    //       // markers: true,
    //       start: "10% 50%",
    //       end: "+=100px center",
    //       id: "ss",
    //       // toggleActions: "play none none reverse",
    //     },
    //   })
    //   .to(tRef.current, {
    //     scale: 1.5,
    //   });
    // gsap.to(tRef.current, {
    //   scrollTrigger: {
    //     trigger: mainRef.current,
    //     pin: tRef.current,
    //     start: "10% 50%",
    //     end: "+=100px center",
    //     pinSpacing: false,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // .to(".car", {
    //   y: -500,
    //   scale: 0.5,
    // })
    // .to(".car-right,.car-left", {
    //   y: -500,
    //   scale: 0.7,
    // });
    // document.querySelectorAll(".government__main").forEach((container) => {
    //   gsap.fromTo(
    //     container.querySelector("h1"),
    //     {
    //       fontSize: "36px",
    //     },
    //     {
    //       fontSize: "46px",
    //       scrollTrigger: {
    //         trigger: container,
    //         pin: container.querySelector("h1"),
    //         pinSpacing: false,
    //         start: "top center-=10%",
    //         markers: true,
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // });
    // gsap.to(".government__title", {
    //   scrollTrigger: {
    //     trigger: ".government",
    //     pin: ".government__title",
    //     markers: true,
    //     scrub: true,
    //     start: "top center",
    //     end: "+=900 center",
    //     pinSpacing: false,
    //     toggleActions: "play none none reverse",
    //   },
    //   fontSize: "64px",
    // });
    // gsap.fromTo(
    //   ".car",
    //   {
    //     y: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".government",
    //       pin: true,
    //       markers: true,
    //       scrub: 1,
    //       start: "center center",
    //       end: "+=500 center",
    //     },
    //     opacity: 1,
    //     y: 0,
    //   }
    // );
  }, []);

  return (
    <section className="government">
      <div className="government__main ">
        <h1 className="government__title">The F*cking government ...</h1>

        {/* <div className="img-container">
          <img src="/images/car.png" className="car" />
          <img src="/images/car-right.png" className="car-right" />
          <img src="/images/car-left.png" className="car-left" />
        </div> */}
      </div>
    </section>
  );
};

export default Government;
