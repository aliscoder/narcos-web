import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function MouseMove({ children }: { children: any }) {
  const ref: any = useRef();
  // useEffect(() => {
  //   let el = document.querySelector(".three");

  //   if (el) {
  //     el.addEventListener(
  //       "mousemove",
  //       (e:any) => {
  //         console.log(e, "e");
  //         ref.current.rotation.y = THREE.MathUtils.lerp(
  //           ref.current.rotation.y,
  //           ((e.clientX / 100) * Math.PI) / 30,
  //           0.05
  //         );
  //         ref.current.rotation.x = THREE.MathUtils.lerp(
  //           ref.current.rotation.x,
  //           ((e.clientY / 1000) * Math.PI) / 40 > 0
  //             ? ((e.clientY / 1000) * Math.PI) / 40
  //             : 0.1,
  //           0.02
  //         );
  //       },
  //       true
  //     );
  //   }
  // }, []);

  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 30,
      0.05
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
     (( state.mouse.y * Math.PI) / 40) > 0 ? ( state.mouse.y * Math.PI) / 40 : 0,
      0.02
    );

  });
  return <group ref={ref}>{children}</group>;
}

export default MouseMove;
