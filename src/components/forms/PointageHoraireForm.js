import React, { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"
import TimeInput from "../inputs/TimeInput"

const PointageHoraireForm = props => {
  const { form, onChange } = useContext(FormContext)

  return (
    <>
    <label htmlFor="demarrage">Heure Démarrage
      <TimeInput
        name="demarrage"
        value={form.demarrage}
        placeholder="Démarrage"
        onChange={onChange}
      />
      </label>

    <label htmlFor="heureFin">Heure Fin
      <TimeInput
        name="heureFin"
        value={form.heureFin}
        placeholder="Heure Fin"
        onChange={onChange}
      />
      </label>

      <label htmlFor="deplacement">Durée Déplacement
      <TimeInput
        name="deplacement"
        value={form.deplacement}
        placeholder="Durée Déplacement"
        onChange={onChange}
      />
      </label>
    </>
  )
}

export default PointageHoraireForm
