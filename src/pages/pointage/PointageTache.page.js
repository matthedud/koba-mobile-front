import React from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/buttons/SubmitButton'
import PointageTacheForm from '../../components/forms/PointageTacheForm'
import FormLayout from '../../components/forms/FormLayout'
import ReturnButton from '../../components/buttons/ReturnButton'
import ButtonFormGroupe from '../../components/buttons/ButtonFormGroupe'

const PointageTache = () => {
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    navigate('/pointage/pointage-validation')
  }

  const handleReturn= ()=>{
    navigate('/pointage/pointage-horaire')
  }
  return (
    <FormLayout>
      <PointageTacheForm />
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageTache