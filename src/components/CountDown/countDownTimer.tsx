import React, {ReactElement} from 'react';
import { useCountdown } from '../../Hooks/useCountdown';
import ShowCounter from "./showTimer";
// @ts-ignore
const CountdownTimer: React.FC<{
    targetDate?: any,
}>  = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <div>
            hello
        </div>;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};
export default CountdownTimer;