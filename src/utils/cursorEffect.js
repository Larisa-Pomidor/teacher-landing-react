import { useEffect, useState } from "react";

export const CursorEffect = () => {
    const [cursorPos, setCursorPos] = useState({ x: 200, y: 200 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="custom-cursor-holder">
            <div className="circle-cursor circle-cursor-top" style={{
                transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
            }}>
                <span className="circle-cursor-inner"></span>
            </div>
            <div className="circle-cursor circle-cursor-bottom" style={{
                transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
            }}>
            </div>
        </div>
    );
};