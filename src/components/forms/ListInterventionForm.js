import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import TacheCardForm from "../TacheCardForm"

const ListInterventionForm = (props) => {
  const { form, onChange } = useContext(FormContext)

  const changeHandler = (event, _id) => {
    const { value, name } = event.target || event
    const index = form.intervention.findIndex((el) => el._id === _id)
    if (index > -1) {
      const newValue = [...form.intervention]
      newValue[index] = { ...newValue[index], [name]: value }
      onChange(newValue, "intervention")
    }
  }

  return form?.intervention?.length > 0
    ? form.intervention.map((intervention) => (
        <TacheCardForm {...intervention} {...props} changeHandler={changeHandler} />
      ))
    : null
}

export default ListInterventionForm
