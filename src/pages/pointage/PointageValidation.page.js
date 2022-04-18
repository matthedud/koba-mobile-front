import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/buttons/SubmitButton'
import PointageDetail from '../../components/PointageDetail'
import ReturnButton from '../../components/buttons/ReturnButton'
import ButtonFormGroupe from '../../components/buttons/ButtonFormGroupe'
import FormLayout from '../../components/forms/FormLayout'
import { FormContext } from '../../context/FormContext'

const PointageValidation = () => {
  const { form } = useContext(FormContext)
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    navigate('/')
  }

  const handleReturn= ()=>{
    navigate('/pointage/pointage-tache')
  }
  console.log({form});
  return (
    <FormLayout>
      <PointageDetail {...form}/>
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageValidation