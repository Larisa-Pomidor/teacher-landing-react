import React from 'react'
import './Sidebar.css'
import { education } from '../../config/education'
import EducationItem from './EducationItem'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='sidebar__inner'>
                <section className='sidebar__about'>
                    <div className='sidebar__title'>
                        About me 👩🏻‍🏫
                    </div>
                    <div className='sidebar__about-image'>
                        <img src='/avatar.jpg' alt='' />
                    </div>
                    <div className='sidebar__about-name'>
                        Veronika
                    </div>'
                    <div className='sidebar__about-label'>
                        76+ students
                    </div>
                </section>
                <section className='sidebar__education'>
                    <div className='sidebar__education-list'>
                        {
                            education && education.map((educationItem, index) => (
                                <EducationItem key={index} index={index + 1} item={educationItem} />
                            ))
                        }
                    </div>
                </section>
                <section className='sidebar__footer'>

                </section>
            </div>
        </aside>
    )
}

export default Sidebar
