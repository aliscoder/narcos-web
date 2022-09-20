
import React, {useEffect} from "react";
import {CounterBgDay} from "../SVG/CounterBgDay";


const ShowCounter: React.FC<{
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}> =  ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <div className="counter__flex">
                    <div className="counter__counter">
                        <CounterBgDay width="auto" />
                        <div className="counter__counter__count">
                            <div className="counter__number">{days}</div>
                            <div className="counter__text">days</div>
                        </div>
                    </div>
                    <div className="counter__counter">
                        <div style={{transform: "rotateX(180deg) rotateY(180deg) translateX(-7px)"}}>
                            <CounterBgDay  width="auto" />
                        </div>
                        <div className="counter__counter__count" style={{margin: 0}}>
                            <div className="counter__number">{hours}</div>
                            <div className="counter__text">hours</div>
                        </div>
                    </div>
                    <div className="counter__counter">
                        <div style={{transform: "rotateX(180deg)"}}>
                            <CounterBgDay  width="auto" />
                        </div>
                        <div className="counter__counter__count">
                            <div className="counter__number">{minutes}</div>
                            <div className="counter__text">minutes</div>
                        </div>
                    </div>
                    <div className="counter__counter">
                        <div style={{}}>
                            <CounterBgDay  width="auto" />
                        </div>
                        <div className="counter__counter__count">
                            <div className="counter__number">{seconds}</div>
                            <div className="counter__text">seconds</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
export default ShowCounter;