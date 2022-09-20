import React, { useState, useEffect, useContext } from "react";
import { LoadingPercent, PageHandlerContext } from "../../providers/Index";

const Landing: React.FC = () => {
  const [count, setcount] = useState(0);
  const { loading } = useContext(LoadingPercent);
  const PageHandlerData = useContext(PageHandlerContext);

  // useEffect(() => {
  //   if (count < 100) setcount(count + 1);
  // }, [count]);

  return (
    <section
      className={
        PageHandlerData.pageHandler == "0" ? "landing showSection" : "landing"
      }
      onClick={() => PageHandlerData.setPageHandler("1")}
    >
      <main className="landing__main">
        <h1 className="landing__title">NARCOSLAND</h1>
        <div className="landing__bg-main">
          <img src="images/main-bg.png" alt="narcos-text" />
        </div>
        <div className="landing__bg-text">
          <img src="images/narcos-text.png" alt="narcos-text" />
        </div>
        {/* <div className="landing__bg-left">
          <img src="images/pattern-left.png" alt="narcos-text" />
        </div>
        <div className="landing__bg-right">
          <img src="images/pattern-right.png" alt="narcos-text" />
        </div> */}
        <div className="landing__loader">
          <div className="landing__count-up">{loading} %</div>
          <div className="landing__gun-container">
            <span className="landing__gun-container--right"></span>
            <div
              className="landing__gun-container--percent"
              style={{ width: `${loading}%` }}
            >
              <span className="landing__gun-container--left"></span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Landing;
