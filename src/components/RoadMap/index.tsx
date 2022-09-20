import React, { useContext } from "react";
import Header from "../Header";
import { PageHandlerContext } from "../../providers/Index";

const RoadMap: React.FC = () => {
  const PageHandlerData = useContext(PageHandlerContext);

  return (
    <section
      className={
        PageHandlerData.pageHandler == "1" ? "roadMap showSection" : "roadMap"
      }
      onClick={() => PageHandlerData.setPageHandler("main page")}
    >
      {/* <Header /> */}
      <main className="roadMap__main">
        <h1 className="roadMap__title">NARCOSLAND</h1>
        <div className="roadMap__bg-main">
          <img src="images/roadMap.png" alt="narcos-text" />
        </div>

        {/* <div className="roadMap__bg-left">
          <img src="images/pattern-left.png" alt="narcos-text" />
        </div>
        <div className="roadMap__bg-right">
          <img src="images/pattern-right.png" alt="narcos-text" />
        </div> */}
        <div className="roadMap__video-container">
          <span className="roadMap__video-container--play"></span>
        </div>
        <div className="roadMap__start-btn">Tap To Start</div>
      </main>
    </section>
  );
};

export default RoadMap;
