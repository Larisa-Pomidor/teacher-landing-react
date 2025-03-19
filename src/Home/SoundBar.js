import React, { useEffect, useState } from 'react'
import Equalizer from './Equalizer';
import './SoundBar.css'

const SoundBar = ({ studentAudio, isActive, setDuration }) => {
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (studentAudio) {
            let audio = new Audio();
            let source = studentAudio;
            audio.src = source;
            audio.loop = true;
            audio.volume = 0.2;

            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });

            setAudio(audio);
        }
    }, [studentAudio, setDuration]);

    useEffect(() => {
        if (audio) {
            isActive ? audio.play() : audio.pause();
        }
    }, [isActive, audio])

    return (
        <div className="soundbar">
            <div className="sound">
                <Equalizer isActive={isActive} />
            </div>
        </div>
    );
}

export default SoundBar
