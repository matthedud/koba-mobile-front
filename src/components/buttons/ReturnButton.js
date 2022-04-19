import React from 'react'
import ButtonComp from './ButtonComp'
import './ReturnButton.css'
import { AiFillStepBackward } from 'react-icons/ai'

const ReturnButton = props => {
  return (
    <ButtonComp className='return-button' onClick={props.onClick}><AiFillStepBackward />Retour<div/></ButtonComp>
  )
}

export default ReturnButton