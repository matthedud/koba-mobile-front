import React from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../components/buttons/SubmitButton'
import PointageChantierMoForm from '../components/forms/PointageChantierMoForm'
import FormLayout from '../components/forms/FormLayout'
import ReturnButton from '../components/buttons/ReturnButton'
import ButtonFormGroupe from '../components/buttons/ButtonFormGroupe'

const PointageChantier = () => {
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    navigate('/pointage/pointage-horaire')
  }

  const handleReturn= ()=>{
    navigate('/')
  }

  return (
    <FormLayout>
      <PointageChantierMoForm />
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageChantier