import React from 'react'
import ButtonComp from './ButtonComp'
import './ReturnButton.css'
import { IoIosArrowBack } from 'react-icons/io'

const ReturnButton = props => {
  return (
    <ButtonComp className='return-button' onClick={props.onClick}><IoIosArrowBack />Retour<div/></ButtonComp>
  )
}

export default ReturnButton