import React, { useContext, useState } from "react"
import { FormContext } from "../context/FormContext"
import SelectInput from "./inputs/SelectInput"

const ChantierMoForm = props => {
  const { form, onChange } = useContext(FormContext)
  const [salaries, setSalaries] = useState([])
  const [chantiers, setChantiers] = useState([])

  return (
    <>
    <label htmlFor="chantier">Chantier
      <SelectInput
        name="chantier"
        value={form.chantier}
        placeholder="Chantier"
        onChange={onChange}
        options={chantiers}
      /></label>
    <label htmlFor="salarie">Salariés
      <SelectInput
        name="salarie"
        value={form.salarie}
        placeholder="Salariés"
        isMulti={true}
        onChange={onChange}
        options={salaries}
      /></label>
    </>
  )
}

export default ChantierMoForm
