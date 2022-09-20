import React from "react";
import Video from "../Video";

export default function CharInfo({
  data = {},
  right = true,
  fade = false
}: {
  data: any;
  right: boolean;
  fade: boolean;
}) {
  return (
    <>
      <div className={`charInfo__left ${!right ?'left' : ''} ${fade ? 'fade' : ' '}`}>
        <div>
          <div className="charInfo__title">{data.title}</div>
        </div>
        <div>
          <div className="charInfo__subtitle">{data.subtitle}</div>
        </div>
        <div className="charInfo__info">
          {data.info}
        </div>
        <div className="charInfo__btns">
          <button className="charInfo__btns-btn">View On Marketplace</button>
          <button className="charInfo__btns-btn secondary">GO to game</button>
        </div>
      </div>
      <div className="charInfo__center"></div>
      <div className={`charInfo__right ${!right ?'left' : ''} ${fade ? 'fade' : ' '}`}>
        <Video />
        <div className="charInfo__btns">
          <button className="charInfo__btns-btn">View On Marketplace</button>
          <button className="charInfo__btns-btn secondary">GO to game</button>
        </div>
      </div>
    </>
  );
}
