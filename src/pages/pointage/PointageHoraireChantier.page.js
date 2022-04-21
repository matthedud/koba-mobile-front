import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageHoraireChantierForm from "../../components/forms/PointageHoraireChantierForm"
import ReturnButton from "../../components/buttons/ReturnButton"
import { FormContext } from "../../context/FormContext"
import { message } from "antd"
import { getHoursFromString, makeStringFromNumHours } from "../../context/utils"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"
import { validHoraire } from "../../context/Validator"

const PointageHoraireChantier = () => {
  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(!validHoraire(form)) return
    if (!form.dureeDeplacement) {
      message.error("ajouter un temps de déplacement")
      return
    }
    const dureeHeure = getHoursFromString(form.heureFin) - getHoursFromString(form.heureDebut)
    const duree = makeStringFromNumHours(dureeHeure)
    const newSalarier = form.salarie.map((salarie) => ({
      ...salarie,
      dureeHeure,
      duree,
      heureDebut: form.heureDebut,
      heureFin: form.heureFin,
    }))
    setForm({ ...form, duree, dureeHeure, salarie: newSalarier })
    navigate("/pointage/pointage-horaire-salarie")
  }

  const handleReturn = () => {
    navigate("/pointage")
  }
  return (
    <>
      <PointageHoraireChantierForm />
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageHoraireChantier
