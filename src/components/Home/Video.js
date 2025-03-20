import React from 'react'
import Loader from '../Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './Video.css'

const Video = () => {
    return (
        <div className='video'>
            <div className='video__inner'>
                <div className='video__block'>
                    <div className='video__animation'>
                        <div className='video__loader'><Loader /></div>
                        <div className='video__icon'><FontAwesomeIcon icon={faPlay} /></div>
                    </div>
                    <div className='video__data'>
                        <div className='video__title'>
                            A welcome video
                        </div>
                        <div className='video__desc'>
                            Learn more about my classes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
