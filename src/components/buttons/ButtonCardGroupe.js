import React from 'react'
import './ButtonGroupe.css'

const ButtonCardGroupe = props => {
  return (
    <div className='button-groupe button-card'>{props.children}</div>
  )
}

export default ButtonCardGroupe