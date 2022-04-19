import React from 'react'
import ButtonComp from './ButtonComp'
import './HomeButton.css'

const HomeButton = props => {
  return (
    <ButtonComp className='home-btn' onClick={props.onClick}>{props.children}</ButtonComp>
  )
}

export default HomeButton