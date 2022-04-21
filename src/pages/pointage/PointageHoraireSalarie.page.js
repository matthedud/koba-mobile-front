import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageHoraireSalarieForm from "../../components/forms/PointageHoraireSalarieForm"
import ReturnButton from "../../components/buttons/ReturnButton"
import { FormContext } from "../../context/FormContext"
import { getHoursFromString, makeStringFromNumHours } from "../../context/utils"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"
import { validHoraire } from "../../context/Validator"

const PointageHoraireSalarie = () => {
  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const newSalarier = []
    for(const salarie of form.salarie){
      if(!validHoraire(form)) return
      const dureeHeure = getHoursFromString(salarie.heureFin) - getHoursFromString(salarie.heureDebut)
      const duree = makeStringFromNumHours(dureeHeure)
      newSalarier.push({...salarie, duree, dureeHeure})
    }
    setForm({ ...form, salarie:newSalarier })
    navigate("/pointage/pointage-tache")
  }

  const handleReturn = () => {
    navigate("/pointage/pointage-horaire-chantier")
  }
  return (
    <>
      <PointageHoraireSalarieForm />
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageHoraireSalarie
