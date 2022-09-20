import React, { useState } from "react";

const About: React.FC = () => {
  return (
    <div className="about" id="About">
      <div className="about__left">
        <div className="about__left--title">
          <img src="/images/narcosLand-typo.png" alt="narcosLand-typo" />
        </div>
        <div className="about__left--sub-title">
          Lorem ipsum dolor sit amet sed lectus. Lorem ipsum dolor sit amet sed
          lectus. Lorem ipsum dolor sit amet sed lectus. Lorem ipsum dolor sit
          amet sed lectus. Lorem ipsum dolor sit amet sed lectus. Lorem ipsum
          dolor sit amet sed lectus. Lorem ipsum dolor sit amet sed lectus.
          Lorem ipsum dolor sit amet sed lectus.
        </div>
      </div>
      <div className="about__video">
        <span className="about__video--play"></span>
      </div>
    </div>
  );
};

export default About;
