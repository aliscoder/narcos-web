import React, { useRef, useEffect } from "react";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Bullet from "./pages/Bullet";
import Government from "./pages/Government";
import StopMe from "./pages/StopMe";
import RoadMap from "./components/RoadMap";
import Landing from "./components/Landing";
import Three from "./pages/Three";
import Providers from "./providers/Index";
import Counter from "./pages/Counter";
import Team from "./components/Header/Team";
import Contact from "./components/Header/Contact";
import { Partner } from "./pages/Partner";
import About from "./pages/About/About";

function App() {
  const showTooltip = (e: any) => {
    e.stopPropagation();
    // console.log(e.target.className, e.target)
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      showTooltip(e);
    });
  }, []);
  const myContainer = useRef(null);

  return (
    <Providers>
      <Layout>
        <Landing />
        <RoadMap />
        <div className="t1">
          <Welcome />
          <Bullet />
          <Government />
          <StopMe />
        </div>
        <div className="change-header">
          <div
            className="t2"
            ref={myContainer}
            id="t2"
            style={{ height: "100vh" }}
          >
            <Three />
          </div>
          <div className="t3">
            <Counter />
          </div>
          <div className="t4">
            <Team />
          </div>
          <div className="t5">
            <About />
          </div>
          <div className="t6">
            <Partner />
          </div>
        </div>
        <div className="t7" style={{ height: "100vh" }}>
          <Contact />
        </div>
      </Layout>
    </Providers>
  );
}

export default App;
