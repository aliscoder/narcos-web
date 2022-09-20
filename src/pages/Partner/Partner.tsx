import React from "react";
import Button from "../../components/Button/Button";
import Frame from "./components/Frame";
import { FrameType } from "./types";

const FRAMES: FrameType[] = Array(5)
  .fill("LO CAPITAL")
  .map((title, index) => ({ id: index + 1, title }));

const Partner = () => {
  return (
    <section className="partner" id="Partners">
      <div className="partner__main container">
        <div className="partner__frame__container">
          {FRAMES.map((frame) => (
            <Frame frame={frame} />
          ))}
        </div>
        <div className="partner__button__section">
          <Button title="Become a Partner" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
