import React, { useState } from "react";

const About: React.FC = () => {
  return (
    <div className="about"  id="About">
      <div className="about__main container">
        <div className="about__left">
          <img src="/images/narcosLand-typo.png" alt="narcosLand-typo" />
          <div className="about__left--sub-title">
            Welcome to Colombia, 1980’s - the fires of El Patrón's empire have
            been lit, its influence spanning borders, and expansion unabated.
            Influence and corruption are rife; cops, guards, politicians and
            those in between are falling into the pocket of the Medellín Cartel,
            and after years of production, America is finally taking notice.
            Narcosland tells the story of the hit Netflix TV series, of the rise
            of El Patrón. Choose your side and ally with the DEA or conversely
            side with the Narcos. Explore recognizable locations from the show
            and take a role in pivotal world-altering events and battles that
            will define and shift the war on drugs. Form your team from a
            variety of class-specific roles, join leading characters, upgrade
            your skills and take part in brutal turn-based combat, where your
            actions will have consequence. Plata or Plomo?
          </div>
        </div>

        <div className="about__right">
          <img src="/images/narcosLand-typo.png" alt="narcosLand-typo" />
          <div className="about__right__video">
            <span className="about__right__video--play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
