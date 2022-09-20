import React from "react";
import { Pointer } from "../../../components/SVG/Pointer";
import { TheFrame } from "../../../components/SVG/TheFrame";
import { FrameInterface } from "../types";

const Frame: React.FC<FrameInterface> = ({ frame }) => {
  return (
    <div className="partner__frame__box">
      <span className="partner__frame__box__image">
        <TheFrame />
      </span>
      <span className={"partner__frame__title"}>{frame.title}</span>
      <div id="pointer" className="partner__frame__box__pointer">
        <Pointer />
      </div>
    </div>
  );
};

export default Frame;
