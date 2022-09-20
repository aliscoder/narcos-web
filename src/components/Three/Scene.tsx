import * as THREE from "three";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import Pablo from "../../assets/models/Pablo";
import PabloObj from "../../assets/models/PabloObj";
import JavObj from "../../assets/models/JavObj";
import ElchapoObj from "../../assets/models/ElchapoObj";
import Jav from "../../assets/models/Jav";
import SteveObj from "../../assets/models/SteveObj";
import Elchapo from "../../assets/models/Elchapo";
import ElchapoTest from "../../assets/models/Elchapo-test";
import Steve from "../../assets/models/Steve";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  OrbitControls,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";
import { gsap } from "gsap";
import { MainLight, SpecLight } from "./Lights";
import MouseMove from "./MouseMove";
import { PatternPlane, GradientPlane } from "./Planes";
import { DoubleSide } from "three";

let count = 0,
  loading = false;
var yDown: any = null;

export default function Scenes({ mode , counter , setCounter , setLoading }: 
  { mode: any , counter : number , setCounter : any , setLoading : any }) {
  const ref: any = useRef();
  const [firstPosition, setFirstPosition] = useState(
    window.innerWidth >= 1400 ? 2 : 0
  );
  const [pablo, setPablo] = useState<any>();
  const [steve, setSteve] = useState<any>();
  const [jav, setJav] = useState<any>();
  const [elchapo, setElchapo] = useState<any>();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(
    window.innerWidth < 700 ? window.innerHeight * 0.4 : window.innerHeight
  );

  useEffect(() => {
    if (pablo && counter === 0) {
      pablo.reset();
      pablo.play();
    } else if (steve && counter === 1) {
      steve.reset();
      steve.play();
    } else if (jav && counter === 2) {
      jav.reset();
      jav.play();
      elchapo.time = 0;
    } else if (elchapo && counter === 3) {
      elchapo.reset();
      elchapo.play();
    }
  }, [pablo, counter]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1400 && ref.current.position === 0)
        setFirstPosition(2);
      else if (window.innerWidth < 1400 && ref.current.position === 2)
        setFirstPosition(0);
      let element = document.querySelector("canvas");
      setWidth(window.innerWidth);
      if (element) {
        setHeight(+element.getBoundingClientRect().height);
      }
    });
  }, []);

  useEffect(() => {
    // if (!!ref.current) {
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("mousewheel", (e) => {
      // cross-browser wheel delta
      const event = e as any;
      if (event.deltaY < 0 && !loading) {
        nextChar();
      } else if (event.deltaY > 0 && !loading) {
        previousChar();
      }
    });
    // }
  }, [ref.current]);

  const loadingHandler = (status : boolean) => {
      if (status) {
        setLoading(true)
        loading = true
      }
      else if (!status) {
        setLoading(false)
        loading = false
      }
  }

  const animateHandler = (num: number) => {
    setCounter(num);
  };

  function getTouches(evt: any) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt: any) {
    const firstTouch = getTouches(evt)[0];
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: any) {
    if (!yDown) {
      return;
    }

    var yUp = evt.touches[0].clientY;

    var yDiff = yDown - yUp;

    if (yDiff > 0) {
      /* down swipe */
      nextChar()
    } else if (yDiff < 0) {
      /* up swipe */
      previousChar()
    }
    /* reset values */
    yDown = null;
  }

  const nextChar = () => {
    if (count === 0 || count === 1 || count === 2) {
      loadingHandler(true)
    }
    if (count === 0) {
      gsap.to(ref.current.position, {
        z: 18,
        duration: 4,
        onStart: () => {
        },
        onComplete: () => {
          animateHandler(1);
          count += 1;
          loadingHandler(false)
        },
      });
    } else if (count === 1) {
      gsap.to(ref.current.position, {
        z: 32,
        duration: 4,
        onStart: () => {},
        onComplete: () => {
          animateHandler(2);
          count += 1;
          loadingHandler(false)
        },
      });
    } else if (count === 2) {
      gsap.to(ref.current.position, {
        z: 46,
        duration: 4,
        onStart: () => {},
        onComplete: () => {
          animateHandler(3);
          count += 1;
          loadingHandler(false)
        },
      });
    }
  };

  const previousChar = () => {
    if (count === 3 || count === 2 || count === 1) {
      loadingHandler(true)
    }
    if (count === 1) {
      gsap.to(ref.current.position, {
        z: window.innerWidth >= 1400 ? 2 : 0,
        duration: 4,
        onStart: () => {},
        onComplete: () => {
          count -= 1;
          animateHandler(0);
          console.log("111 :>> ", 111);
          loadingHandler(false)
        },
      });
    } else if (count === 2) {
      gsap.to(ref.current.position, {
        z: 18,
        duration: 4,
        onComplete: () => {
          animateHandler(1);
          count -= 1;
          loadingHandler(false)
        },
      });
    } else if (count === 3) {
      gsap.to(ref.current.position, {
        z: 32,
        duration: 4,
        onComplete: () => {
          animateHandler(2);
          count -= 1;
          loadingHandler(false)
        },
      });
    }
  };


  return (
    <>
      <PerspectiveCamera
        position={[0, 3, 16.5]}
        aspect={width / height}
        rotation={[-0.08, 0, 0]}
        fov={35}
        makeDefault
        onUpdate={(c) => c.updateProjectionMatrix()}
      />
      {/* <OrbitControls /> */}
      <fog attach="fog" color="#fbf8f5" near={3} far={53} />
      <ambientLight intensity={0.8} />
      <MainLight />
      <MouseMove>
        <group
          scale={[1.167, 1.167, 1.167]}
          ref={ref}
          position={[0, 0, firstPosition]}
        >
          <PatternPlane />
          <Plane
            receiveShadow
            scale={[1, 1, 1]}
            position={[0, 0.015, -5.4]}
            rotation={[Math.PI / -2, 0, 0]}
            args={[8, 80]}
          >
            <shadowMaterial
              transparent
              fog
              opacity={0.3}
              depthWrite
              color={"rgba(255, 99, 71, 1"}
              side={DoubleSide}
            />
          </Plane>
          <PabloObj
            setAnimate={setPablo}
            position={[-1.2, 0, -1.5]}
            scale={[0.355, 0.355, 0.355]}
            rotation={[0, 0.8, 0]}
          />
          {/* <Pablo
            position={[-1.2, 0, -1.5]}
            scale={[2, 2, 2]}
            rotation={[0, 1, 0]}
          /> */}
          <SteveObj
            setAnimate={setSteve}
            scale={[0.7, 0.7, 0.7]}
            position={[1.2, 0, -13.5]}
            rotation={[0, -0.8, 0]}
          />
          {/* <Steve
            scale={[2, 2, 2]}
            position={[1.2, 0, -12]}
            rotation={[0, -0.8, 0]}
          /> */}
          <JavObj
            setAnimate={setJav}
            scale={[0.67, 0.67, 0.67]}
            position={[-1.2, 0, -25.5]}
            rotation={[0, 0.8, 0]}
          />
          <ElchapoObj
            setAnimate={setElchapo}
            scale={[97, 97, 97]}
            position={[0, 0, -37.5]}
            rotation={[0, 0, 0]}
          />
          {/* <Elchapo
            scale={[2, 2, 2]}
            position={[0, 0, -24]}
            rotation={[0, 0, 0]}
          /> */}
        </group>
        <GradientPlane />
      </MouseMove>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}
