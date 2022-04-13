import React from 'react'
import ButtonComp from './ButtonComp'
import './ReturnButton.css'

const ReturnButton = props => {
  return (
    <ButtonComp className='return-button' onClick={props.onClick}>Retour</ButtonComp>
  )
}

export default ReturnButton