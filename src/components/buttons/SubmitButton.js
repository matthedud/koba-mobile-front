import React from 'react'
import ButtonComp from './ButtonComp'
import './SubmitButton.css'

const SubmitButton = props => {
  return (
    <ButtonComp className='submit-button' onClick={props.onClick}>Valider</ButtonComp>
  )
}

export default SubmitButton