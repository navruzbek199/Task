import React, { useContext } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import './Mode.scss'
import { GlobalContext } from '../../store/context'
const Mode = () => {
    const {changeTheme} = useContext(GlobalContext)
  return (
    <div className='mode'>
        <div className="darks">
            <MdDarkMode size="32" color='#283046' onClick={changeTheme} />  
        </div>
        <div className="lights">
            <MdLightMode size="32" color='#fff' onClick={changeTheme}/> 
        </div>
    </div>
  )
}

export default Mode