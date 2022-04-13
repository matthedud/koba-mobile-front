import React from 'react'
import './SubmitButton.css'

const SubmitButton = props => {
  return (
    <button className='submit-button' onClick={props.onClick}>Valider</button>
  )
}

export default SubmitButton