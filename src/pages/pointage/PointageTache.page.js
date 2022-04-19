import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/buttons/SubmitButton'
import PointageTacheForm from '../../components/forms/PointageTacheForm'
import FormLayout from '../../components/forms/FormLayout'
import ReturnButton from '../../components/buttons/ReturnButton'
import ButtonFormGroupe from '../../components/buttons/ButtonFormGroupe'
import { message } from 'antd'
import { getHoursFromString } from '../../context/utils'
import { FormContext } from '../../context/FormContext'

const PointageTache = () => {
  const navigate = useNavigate()
  const {form} = useContext(FormContext)

  const checkInterventionValid = intervention =>{
    if(!intervention.valide){
      message.error('Valider la tache')
      return false
    }
    if(!intervention.tacheChantier){
      message.error('entrer une Tache')
      return false
    }
    if(intervention.salarie?.length<1){
      message.error('entrer un salarier')
      return false
    }
    if(!intervention.quantite && intervention.quantite!==0){
      message.error('entrer une quantite')
      return false
    }
    if(!intervention.duree){
      message.error('entrer une quantite')
      return false
    } else if(isNaN(getHoursFromString(intervention.duree))){
      message.error('entrer une quantite')
      return false
    }
    return true
  }

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