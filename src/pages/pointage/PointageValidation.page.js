import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/buttons/SubmitButton'
import PointageDetail from '../../components/PointageDetail'
import ReturnButton from '../../components/buttons/ReturnButton'
import FormLayout from '../../components/forms/FormLayout'
import { FormContext } from '../../context/FormContext'
import { message } from 'antd'
import ButtonFoorterGroupe from '../../components/buttons/ButtonFoorterGroupe'

const PointageValidation = () => {
  const { form, setForm} = useContext(FormContext)
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    setForm({})
    message.info('pointage sauvegardé')
    navigate('/')
  }

  const handleReturn= ()=>{
    navigate('/pointage/pointage-tache')
  }
  console.log({form});
  return (
    <>
      <PointageDetail {...form}/>
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageValidation