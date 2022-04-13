import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import SelectInput from "./SelectInput"

const ChantierMoForm = () => {
  const { form, onChange } = useContext(FormContext)

  return (
    <div>
      <SelectInput
        name="chantier"
        value={form.chantier}
        placeholder="Chantier"
        onChange={onChange}
      />
      <SelectInput
        name="salarie"
        value={form.salarie}
        placeholder="salarie"
        isMulti={true}
        onChange={onChange}
      />
    </div>
  )
}

export default ChantierMoForm
