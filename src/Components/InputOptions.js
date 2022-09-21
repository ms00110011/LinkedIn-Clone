import React from 'react'
import './InputOptions.css'

export const InputOptions = ({title,Icon,color}) => {
  return (
    <div className='InputOption'>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}
