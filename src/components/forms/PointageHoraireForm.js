import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import TimeInput from "../inputs/TimeInput"

const PointageHoraireForm = (props) => {
  const { form, onChange } = useContext(FormContext)
  console.log({form});

  return (
    <>
      <label htmlFor="heureDebut">
        Heure Démarrage:
        <TimeInput
          name="heureDebut"
          value={form.heureDebut}
          placeholder="Démarrage"
          onChange={onChange}
        />
      </label>

      <label htmlFor="heureFin">
        Heure Fin:
        <TimeInput
          name="heureFin"
          value={form.heureFin}
          placeholder="Heure Fin"
          onChange={onChange}
        />
      </label>

      <label htmlFor="dureeDeplacement">
        Durée Déplacement:
        <TimeInput
          name="dureeDeplacement"
          value={form.dureeDeplacement}
          placeholder="Durée Déplacement"
          onChange={onChange}
        />
      </label>
    </>
  )
}

export default PointageHoraireForm
