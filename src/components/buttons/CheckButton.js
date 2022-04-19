import React from 'react'
import ButtonComp from './ButtonComp'
import './CheckButton.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const CheckButton = props => {
  return (
    <ButtonComp className='check-button' onClick={props.onClick}><AiOutlineCheckCircle /> valider</ButtonComp>
  )
}

export default CheckButton