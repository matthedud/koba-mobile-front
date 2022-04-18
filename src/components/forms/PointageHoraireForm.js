import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import TimeInput from "../inputs/TimeInput"

const PointageHoraireForm = (props) => {
  const { form, onChange } = useContext(FormContext)
  console.log({ form })

  return (
    <>
      <TimeInput
        name="heureDebut"
        value={form.heureDebut}
        placeholder="Démarrage"
        onChange={onChange}
      />

      <TimeInput
        name="heureFin"
        value={form.heureFin}
        placeholder="Heure Fin"
        onChange={onChange}
      />

      <TimeInput
        name="dureeDeplacement"
        value={form.dureeDeplacement}
        placeholder="Durée Déplacement"
        onChange={onChange}
      />
    </>
  )
}

export default PointageHoraireForm
