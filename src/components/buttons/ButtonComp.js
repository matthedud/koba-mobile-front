import React from 'react'
import './ButtonComp.css'

const ButtonComp = props => {
  return (
    <button className={`button-component ${props.className}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default ButtonComp