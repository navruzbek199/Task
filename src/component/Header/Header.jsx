import React from 'react'
import './Header.scss'
import Mode from '../Mode/Mode'
const Header = () => {

    return (
        <div className='header'>
            <div className="title">
                <h1>Task</h1>
            </div>
            <Mode />
            
        </div>
    )
}

export default Header