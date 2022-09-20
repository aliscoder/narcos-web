import React from "react";
import { CounterBgDay } from "../components/SVG/CounterBgDay";
import CountdownTimer from "../components/CountDown/countDownTimer";

const Counter: React.FC = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <section className=" counter" id="Release-date">
      <div className="counter__main container">
        <div className="counter__title">City awaits ...</div>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className={"counter__join"}>
          Join our
          <a href="">{" Discord "}</a>
          to get the latest news and engage ine early mints.
        </div>
      </div>
    </section>
  );
};

export default Counter;
