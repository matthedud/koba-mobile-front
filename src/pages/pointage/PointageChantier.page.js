import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import { FormContext } from "../../context/FormContext"
import PointageChantierMoForm from "../../components/forms/PointageChantierMoForm"
import ReturnButton from "../../components/buttons/ReturnButton"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"
import { message } from "antd"

const PointageChantier = () => {
  const navigate = useNavigate()
  const { form, setForm } = useContext(FormContext)

  const handleSubmit = () => {
    if (!form.chantier?._id) {
      setForm({...form, invalide:true})
      message.error("entrer un chantier")
      return
    }
    console.log('form.salarie?.length', form.salarie?.length);
    if (!form.salarie?.length >0) {
      setForm({...form, invalide:true})
      message.error("ajouter une persone")
      return
    }
    setForm({
      ...form,
      heureDebut: form.chantier.heureDebut,
      heureFin: form.chantier.heureFin,
      dureeDeplacement: form.chantier.dureeDeplacement,
      invalide:false
    })
    navigate("/pointage/pointage-horaire-chantier")
  }

  const handleReturn = () => {
    setForm({})
    navigate("/")
  }

  return (
    <>
      <PointageChantierMoForm />
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageChantier
