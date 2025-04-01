import React, { useState } from 'react'
import { students } from '../../config/students'
import Student from './Student'
import './Home.css'
import { isEqual } from '../../utils/compareUtils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Video from './Video'
import { Link } from 'react-router-dom'

const Home = () => {

    const [activeStudent, setActiveStudent] = useState(null);

    const handleActiveStudent = (item) => {
        isEqual(activeStudent, item) ?
            setActiveStudent(null) :
            setActiveStudent(item)
    }

    return (
        <section className='home'>
            <div className='home__inner'>
                <div className='home__header'>
                    <div className='home__title-block'>
                        What my students say 🎓
                    </div>
                    <Link className='home__search-block'>
                        <FontAwesomeIcon icon={faSearch} />
                        <span>
                            Find your place among happy students!
                        </span>
                    </Link>
                </div>
                <div className='home__student-list'>
                    {
                        students && students.map((student, index) => (
                            student.id ?
                                <Student key={index + 1} item={student}
                                    isActive={activeStudent && (activeStudent.id === student.id)}
                                    handleActiveStudent={handleActiveStudent} />
                                :
                                <Video key={0} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Home
