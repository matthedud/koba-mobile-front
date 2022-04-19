import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import DurationInput from "../inputs/DurationInput"
import TimeInput from "../inputs/TimeInput"
import "./PointageHoraireForm.css"

const PointageHoraireForm = (props) => {
  const { form, onChange } = useContext(FormContext)
  console.log({ form })

  return (
    <div className="horaire-form">
      <label>
        Horaire chantier:
        <div className="horaire-chantier">
          <TimeInput
            name="heureDebut"
            value={form.heureDebut}
            placeholder=" "
            onChange={onChange}
          />
          <TimeInput name="heureFin" value={form.heureFin} placeholder=" " onChange={onChange} />
        </div>
      </label>
      <label>
        Durée de Déplacement:
        <DurationInput
          name="dureeDeplacement"
          value={form.dureeDeplacement}
          placeholder="Durée Déplacement"
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default PointageHoraireForm
