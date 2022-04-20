import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/buttons/SubmitButton'
import PointageTacheForm from '../../components/forms/PointageTacheForm'
import ReturnButton from '../../components/buttons/ReturnButton'
import { checkInterventionValid } from '../../context/utils'
import { FormContext } from '../../context/FormContext'
import ButtonFoorterGroupe from '../../components/buttons/ButtonFoorterGroupe'

const PointageTache = () => {
  const navigate = useNavigate()
  const {form} = useContext(FormContext)



  const handleSubmit= ()=>{
    for(const intervention of form.intervention){
      if(!checkInterventionValid(intervention))
      return
    }

    navigate('/pointage/pointage-validation')
  }

  const handleReturn= ()=>{
    navigate('/pointage/pointage-horaire')
  }
  return (
    <>
      <PointageTacheForm />
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn}/>
        <SubmitButton onClick={handleSubmit}/>
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageTache