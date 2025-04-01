import { useState } from 'react';
import SoundBar from './SoundBar';
import './Student.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Student = ({ item, isActive, handleActiveStudent }) => {

    const [duration, setDuration] = useState(null);

    return (
        <div className='student' onClick={() => handleActiveStudent(item)}>
            <div className='student__inner' style={{ backgroundImage: `url(${item.image})` }}>
                <div className='student__data'>
                    <div className='student__date'>
                        <div className='student__day'>
                            {item.day} <span className='student__month'>{item.month}</span>
                        </div>
                        <div className='student__year'>
                            {item.year}
                        </div>
                    </div>
                    <div className='student__name-block'>
                        <div className='student__name'>
                            {item.name}
                        </div>
                        <div className='student__position'>
                            {item.position}
                        </div>
                    </div>
                </div>
                <div className='student__feedback'>
                    <div className='student__audio-name-block'>
                        <div className='student__audio-name-block'>
                            {item.audioName}
                        </div>
                        <div className='student__audio-time'>
                            {duration &&
                                <>
                                    <FontAwesomeIcon icon={faClock} />
                                    <>{`${duration.toFixed(0)} sec`}</>
                                </>

                            }
                        </div>
                    </div>
                    <div className='student__audio-equalizer'>
                        <SoundBar isActive={isActive} studentAudio={item.audio} setDuration={setDuration} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student
