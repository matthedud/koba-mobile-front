import React from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../components/buttons/SubmitButton'
import PointageDetail from '../components/PointageDetail'
import ReturnButton from '../components/buttons/ReturnButton'
import ButtonFormGroupe from '../components/buttons/ButtonFormGroupe'
import FormLayout from '../components/forms/FormLayout'

const PointageValidation = () => {
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    navigate('/')
  }

  const handleReturn= ()=>{
    navigate('/pointage/pointage-tache')
  }
  return (
    <FormLayout>
      <PointageDetail />
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageValidation