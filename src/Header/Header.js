import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__outer'>
                <div className='container'>
                    <div className='header__inner'>
                        <div className='header__logo'>

                        </div>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
