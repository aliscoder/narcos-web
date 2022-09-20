import React, { useState } from "react";

const Team: React.FC = () => {
  const team = [
    { name: "Michael McDonald", title: "Frontend Developer" },
    { name: "Michael McDonald", title: "Frontend Developer" },
    { name: "Michael McDonald", title: "Frontend Developer" },
    { name: "Michael McDonald", title: "Frontend Developer" },
  ];
  return (
    <div className="teamSection" id="Team">
      {team.map((item, i) => (
        <div className="team" key={i}>
          <div className="team__avatar">
            <div className="team__avatar--pattern">
              <img src="/images/michael.png" className="team__avatar--img" />
            </div>
          </div>
          <div className="team__info">
            <div className="team__info--name">{item.name}</div>
            <div className="team__info--job">{item.title}</div>
            <div className="team__info--social-media">
              <span className="team__info--social-media__item box">
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
                <img src="/images/linkedin.png" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
