import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/buttons/SubmitButton'
import PointageHoraireForm from '../../components/forms/PointageHoraireForm'
import FormLayout from '../../components/forms/FormLayout'
import ReturnButton from '../../components/buttons/ReturnButton'
import ButtonFormGroupe from '../../components/buttons/ButtonFormGroupe'
import { FormContext } from '../../context/FormContext'
import { message } from 'antd'

const PointageHoraire = () => {
  const { form } = useContext(FormContext)
  const navigate = useNavigate()

  const handleSubmit= ()=>{
    if(!form.heureDebut){
      message.error("entrer l'heure de début sur chantier")
      return
    }
    if(!form.heureFin){
      message.error("entrer l'heure de fin de chantier")
      return
    }
    if(!form.dureeDeplacement){
      message.error("ajouter un temps de déplacement")
      return
    }
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