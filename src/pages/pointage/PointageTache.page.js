import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageTacheForm from "../../components/forms/PointageTacheForm"
import ReturnButton from "../../components/buttons/ReturnButton"
import { checkInterventionValid } from "../../context/Validator"
import { FormContext } from "../../context/FormContext"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"
import { heurAPointe } from "../../context/utils"
import { message } from "antd"

const PointageTache = () => {
  const navigate = useNavigate()
  const { form, setForm } = useContext(FormContext)

  const handleSubmit = () => {
    const newIntervention = []
    for (const intervention of form.intervention) {
      if (!checkInterventionValid(intervention)){
        const changeIntervention = [...form.intervention]
        const index = changeIntervention.findIndex(el=>el.idForm===intervention.idForm)
        if(index>-1){
          const newValue = {...changeIntervention[index], invalide:true}
          changeIntervention[index] = newValue
          setForm({...form, 'intervention':changeIntervention, })
        }
        return
      }
      else {
        const quantite =
          (intervention.tacheChantier.quantite *
            (intervention.avancement - intervention.tacheChantier.avancement)) /
          100
          newIntervention.push({...intervention, quantite, invalide:false})
      }
    }
    const checkHoraire = heurAPointe(form)
    for(const salarie of checkHoraire){
      if(salarie.dureeHeure > 0 ){
        message.error(`pas assez d'heures de pointé pour ${salarie.nom}`)
        return
      }
      if(salarie.dureeHeure < 0 ){
        message.error(`trop d'heures pointé pour ${salarie.nom}`)
        return
      }
    }
    setForm({...form, 'intervention':newIntervention, })
    navigate("/pointage/pointage-validation")
  }
  const handleReturn = () => {
    navigate("/pointage/pointage-horaire-salarie")
  }

  return (
    <>
      <PointageTacheForm />
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageTache
