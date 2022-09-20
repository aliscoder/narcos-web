import React from 'react';

const DateTimeDisplay: React.FC<{
    value: number,
    type: "Days" | "Hours" | "Mins" | "Seconds",
    isDanger: boolean,
}> = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;