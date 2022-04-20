import React from 'react'
import ButtonComp from './ButtonComp'
import './DeleteButton.css'
import { DeleteOutlined } from '@ant-design/icons'

const DeleteButton = props => {
  return (
    <ButtonComp className='delete-button' onClick={props.onClick}><DeleteOutlined />Supprimer</ButtonComp>
  )
}

export default DeleteButton