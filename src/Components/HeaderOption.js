import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'

export const HeaderOption = ({avatar,Icon,title}) => {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className="HeaderOption__icon" />}
        {avatar && <Avatar classname="HeaderOption__icon" src={avatar} />}
        <h3 className='HeaderOption__title'>{title}</h3>
    </div>
  )
}
