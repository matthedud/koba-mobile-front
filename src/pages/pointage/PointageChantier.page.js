import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import { FormContext } from "../../context/FormContext"
import PointageChantierMoForm from "../../components/forms/PointageChantierMoForm"
import FormLayout from "../../components/forms/FormLayout"
import ReturnButton from "../../components/buttons/ReturnButton"
import ButtonFormGroupe from "../../components/buttons/ButtonFormGroupe"
import { message } from "antd"

const PointageChantier = () => {
  const navigate = useNavigate()
  const { form, setForm } = useContext(FormContext)

  const handleSubmit = () => {
    if (!form.chantier?._id) {
      message.error("entrer un chantier")
      return
    }
    console.log('form.salarie?.length', form.salarie?.length);
    if (!form.salarie?.length >0) {
      message.error("ajouter une persone")
      return
    }
    setForm({
      ...form,
      heureDebut: form.chantier.heureDebut,
      heureFin: form.chantier.heureFin,
      dureeDeplacement: form.chantier.dureeDeplacement,
    })
    navigate("/pointage/pointage-horaire")
  }

  const handleReturn = () => {
    setForm({})
    navigate("/")
  }

  return (
    <FormLayout>
      <PointageChantierMoForm />
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFormGroupe>
    </FormLayout>
  )
}

export default PointageChantier
