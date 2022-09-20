import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Scenes from "../components/Three/Scene";
import Loading from "../components/Three/Loading";
import CharInfo from "../components/Three/CharInfo";
import charData from "../data/charData";

export default function Three() {
  const [mode, setMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [height, setHeight] = useState(
    window.innerWidth < 800
      ? 50
      : window.innerWidth < 1199
      ? 70
      : window.innerWidth < 1400
      ? 80
      : 100
  );

  const changeMode = (e: any) => {
    if (e.keyCode === 67) {
      setMode((res) => !res);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      changeMode(e);
    });
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 800) setHeight(50);
      else if (window.innerWidth < 1199) setHeight(70);
      else if (window.innerWidth < 1400) setHeight(80);
      else setHeight(100);
    });
  }, []);

  useEffect(() => {
    console.log("counter", counter);
  }, [counter]);

  return (
    <section className="three" id="Characters">
      {/* <Suspense fallback={<Loading />}>
        <Canvas
          style={{ height: `${height}%`, position: "absolute" }}
          gl={{
            antialias: true,
            alpha: true,
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1,
          }}
          className="canvas"
          shadows={true}
          dpr={[2, 2]}
          performance={{ min: 0.5 }}
        >
          <Scenes 
          setLoading={setLoading} 
          counter={counter} 
          setCounter={setCounter} 
          mode={mode} />
        </Canvas>
      </Suspense>
      {charData.map(( item : any , ind : any) => (
        ind === counter && <CharInfo key={ind} fade={loading} data={item} right={(ind % 2  === 0) ? true : false}/>
      ))} */}
    </section>
  );
}
