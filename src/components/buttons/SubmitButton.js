import React from 'react'
import ButtonComp from './ButtonComp'
import './SubmitButton.css'
import { AiOutlineCheck } from 'react-icons/ai'

const SubmitButton = props => {
  return (
    <ButtonComp className='submit-button' onClick={props.onClick}><div/>Valider<AiOutlineCheck/></ButtonComp>
  )
}

export default SubmitButton