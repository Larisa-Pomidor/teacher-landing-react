import React from 'react'
import './EducationItem.css'

const EducationItem = ({ item, index }) => {
    return (
        <div className='education-item'>
            <div className='education-item__data'>
                <div className='education-item__name'>
                    {item.name}
                </div>
                <div className='education-item__year'>
                    {item.year}
                </div>
                <div className='education-item__school' dangerouslySetInnerHTML={{ __html: item.school }} />
            </div>
            <div className='education-item__number'>
                <div className='education-item__number-inner'>
                    {index}
                </div>
            </div>
        </div>
    )
}

export default EducationItem
