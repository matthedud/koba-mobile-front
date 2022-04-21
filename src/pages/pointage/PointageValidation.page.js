import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../../components/buttons/SubmitButton"
import PointageDetail from "../../components/PointageDetail"
import ReturnButton from "../../components/buttons/ReturnButton"
import FormLayout from "../../components/forms/FormLayout"
import { FormContext } from "../../context/FormContext"
import { message } from "antd"
import ButtonFoorterGroupe from "../../components/buttons/ButtonFoorterGroupe"
import { LoadingContext } from "../../context/LoadingContext"
import { AuthContext } from "../../context/AuthContext"

const PointageValidation = () => {
  const { form, setForm } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const { postRequest } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await postRequest(`/pointage`, form)
      message.info("pointage sauvegardé")
      navigate("/")
      setForm({})
    } catch (err) {
      message.error("erreur de connexion")
      console.log({ err })
    }
    setLoading(false)
  }

  const handleReturn = () => {
    navigate("/pointage/pointage-tache")
  }

  return (
    <>
      <PointageDetail {...form} />
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PointageValidation
