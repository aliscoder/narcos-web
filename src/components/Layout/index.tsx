import React, { useContext } from "react";
import { PageHandlerContext } from "../../providers/Index";
import Header from "../Header";
import Slider from "../scrollSlider/Slider";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const PageHandlerData = useContext(PageHandlerContext);
  console.log(PageHandlerData, "PageHandlerData");

  return (
    <>
      <Header />
      <div className="layout__main" id="layout">
        {children}

        <div className="layout__bg-left">
          <img src="images/pattern-left.png" alt="narcos-text" />
        </div>
        <div className="layout__bg-right">
          <img src="images/pattern-right.png" alt="narcos-text" />
        </div>
      </div>
      {!(
        PageHandlerData.pageHandler == "0" || PageHandlerData.pageHandler == "1"
      ) && <Slider />}
    </>
  );
};

export default Layout;
