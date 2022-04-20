import React from 'react'
import ButtonComp from './ButtonComp'
import './HomeButton.css'

const LogoutButton = props => {
  return (
    <ButtonComp className='home-btn logout' onClick={props.onClick}>{props.children}</ButtonComp>
  )
}

export default LogoutButton