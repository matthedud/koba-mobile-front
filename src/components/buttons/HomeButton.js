import React from 'react'
import './HomeButton.css'

const HomeButton = props => {
  return (
    <button className='home-btn' onClick={props.onClick}>{props.children}</button>
  )
}

export default HomeButton