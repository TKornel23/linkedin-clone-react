import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from './assets/linkedin-logo.svg'
import './Header.css'
import HeaderOption from './headeroption/HeaderOption'
import HomeIcon from '@mui/icons-material/Home'
import SuperVisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import NotificationsIcon from '@mui/icons-material/Notifications'
import avatar from './assets/avatar.jpg'

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src={ logo } alt='logo' />
        <div className="header__search">
          <SearchIcon />
          <input type='text'/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={ HomeIcon } title='Home'/>
        <HeaderOption Icon={ SuperVisorAccountIcon } title='My Network'/>
        <HeaderOption Icon={ BusinessCenterIcon } title='Jobs'/>
        <HeaderOption Icon={ NotificationsIcon } title='Notifications'/>
        <HeaderOption avatar={ avatar } title='me'/>
      </div>
    </div>
  );
}

export default Header