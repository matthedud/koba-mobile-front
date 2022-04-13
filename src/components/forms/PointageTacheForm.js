import React, { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"
import SelectInput from "../inputs/SelectInput"
import ListeTache from "../ListeTache"

const PointageTacheForm = props => {
  const { form, onChange } = useContext(FormContext)

  return (
    <>
    <label htmlFor="Tache">Taches
    </label>
      <ListeTache />
    </>
  )
}

export default PointageTacheForm
