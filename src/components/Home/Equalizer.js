import React, { useEffect, useState } from "react";
import { randomBetween } from "../../utils/randomUtils";

const Equalizer = ({ speed = 250, barsHeight = [5, 10, 15, 20, 30],
    handleTrack, isActive }) => {
    const [heights, setHeights] = useState(barsHeight.map(() => randomBetween(10, 20)));

    useEffect(() => {
        const interval = setInterval(() => {
            setHeights(barsHeight.map(() => randomBetween(10, 30)));
        }, speed);

        if (!isActive) { clearInterval(interval) }

        return () => clearInterval(interval);
    }, [speed, barsHeight, isActive]);

    return (
        <div className={`equalizer ${!isActive ? 'paused' : ''}`} onClick={handleTrack}>
            {heights.map((height, index) => (
                <span key={index} className="bar" style={{ height: `${height}px` }} />
            ))}
        </div>
    );
};

export default Equalizer;