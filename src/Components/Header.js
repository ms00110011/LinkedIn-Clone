import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../Images/linkedin.png'
import { HeaderOption } from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Header = () => {
  return (
    <div className='header'>

    <div className="header__left">

        <img src={linkedin} alt="" />        

        <div className="header__search">

            <SearchIcon />

            <input type="text" />

        </div>

    </div>


    <div className="header__right">

    <HeaderOption title='Home' Icon={HomeIcon}/>
    <HeaderOption title='My Network' Icon={GroupIcon} />
    <HeaderOption title='Jobs' Icon={WorkIcon} />
    <HeaderOption title='Messaging' Icon={MessageIcon} />
    <HeaderOption title='Notifications' Icon={NotificationsIcon} />
    <HeaderOption title='Me' avatar="https://yt3.ggpht.com/yti/AJo0G0ndW1Oe2aq7sMnk4OwD3nHYLGrYHY74SVkkNfF0cTg=s108-c-k-c0x00ffffff-no-rj" />





    </div>



    </div>
  )
}
