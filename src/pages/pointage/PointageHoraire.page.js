import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageHoraireForm from "../../components/forms/PointageHoraireForm"
import FormLayout from "../../components/forms/FormLayout"
import ReturnButton from "../../components/buttons/ReturnButton"
import ButtonFormGroupe from "../../components/buttons/ButtonFormGroupe"
import { FormContext } from "../../context/FormContext"
import { message } from "antd"
import moment from "moment"

const PointageHoraire = () => {
  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()

  const getHours = (time) => {
    const timeMoment = moment(time, "HH:mm")
    const hours = timeMoment.hour()
    const minutes = timeMoment.minute()
    return hours + minutes / 60
  }

  const foatToString = (totalhours) => {
    const hours = Math.floor(totalhours)
    const stringHours = hours.toString().padStart(2, 0)
    const minutes = totalhours * 60 - hours * 60
    const stringMinutess = minutes.toString().padStart(2, 0)
    return `${stringHours}:${stringMinutess}`
  }

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
    const dureeHeure = getHours(form.heureFin) - getHours(form.heureDebut)
    const duree = foatToString(dureeHeure)
    setForm({ ...form, duree, dureeHeure })
    navigate("/pointage/pointage-tache")
  }

  const handleReturn = () => {
    navigate("/pointage")
  }
  return (
    <FormLayout>
      <PointageHoraireForm />
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageHoraire
