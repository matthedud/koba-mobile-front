import React from 'react'
import ButtonComp from './ButtonComp'
import './ReturnButton.css'

const DeleteButton = props => {
  return (
    <ButtonComp className='delete-button' onClick={props.onClick}>Supprimer</ButtonComp>
  )
}

export default DeleteButton