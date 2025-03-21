import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader'

const Navbar = () => {
    return (
        <div className='menu'>
            <div className='menu__inner'>
                <div className='menu__list'>
                    <Link className='menu__item menu__item_active'>
                        🏫
                        <span>Professional background</span>
                    </Link>
                    <Link className='menu__item'>
                        <Loader />
                        🎬
                    </Link>
                    <Link className='menu__item'>
                        <FontAwesomeIcon icon={faTelegram} style={{ color: "#4891e0" }} />
                    </Link>
                    <Link className='menu__item'>
                        💌
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
