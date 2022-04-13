import React from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../components/buttons/SubmitButton'
import PointageHoraireForm from '../components/forms/PointageHoraireForm'
import FormLayout from '../components/forms/FormLayout'
import ReturnButton from '../components/buttons/ReturnButton'
import ButtonFormGroupe from '../components/buttons/ButtonFormGroupe'

const PointageHoraire = () => {
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    navigate('/pointage/pointage-tache')
  }

  const handleReturn= ()=>{
    navigate('/pointage')
  }
  return (
    <FormLayout>
      <PointageHoraireForm />
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageHoraire