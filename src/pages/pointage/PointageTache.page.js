import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageTacheForm from "../../components/forms/PointageTacheForm"
import ReturnButton from "../../components/buttons/ReturnButton"
import { checkInterventionValid } from "../../context/Validator"
import { FormContext } from "../../context/FormContext"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"

const PointageTache = () => {
  const navigate = useNavigate()
  const { form, onChange } = useContext(FormContext)

  const handleSubmit = () => {
    const newIntervention = []
    for (const intervention of form.intervention) {
      if (!checkInterventionValid(intervention)) return
      else {
        const quantite =
          (intervention.tacheChantier *
            (intervention.avancement - intervention.tacheChantier.avancement)) /
          100
          newIntervention.push({...intervention, quantite})
      }
    }
    onChange(newIntervention, 'intervention')
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
