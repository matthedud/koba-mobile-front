import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageHoraireSalarieForm from "../../components/forms/PointageHoraireSalarieForm"
import ReturnButton from "../../components/buttons/ReturnButton"
import { FormContext } from "../../context/FormContext"
import { message } from "antd"
import { getHoursFromString, makeStringFromNumHours } from "../../context/utils"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"

const PointageHoraireSalarie = () => {
  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!form.heureDebut) {
      message.error("entrer l'heure de début sur chantier")
      return
    }
    if (!form.heureFin) {
      message.error("entrer l'heure de fin de chantier")
      return
    }
    if (form.heureFin < form.heureDebut) {
      message.error("L'heure de Début doit être inférieur à l'heure de fin")
      return
    }
    if (!form.dureeDeplacement) {
      message.error("ajouter un temps de déplacement")
      return
    }
    const dureeHeure = getHoursFromString(form.heureFin) - getHoursFromString(form.heureDebut)
    const duree = makeStringFromNumHours(dureeHeure)
    setForm({ ...form, duree, dureeHeure })
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
