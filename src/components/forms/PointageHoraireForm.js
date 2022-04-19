import { message } from "antd"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FormContext } from "../../context/FormContext"
import DurationInput from "../inputs/DurationInput"
import TimeInput from "../inputs/TimeInput"
import "./PointageHoraireForm.css"

const PointageHoraireForm = (props) => {
  const { form, onChange } = useContext(FormContext)
  const navigate = useNavigate()  
  
  if(!form.chantier){
    message.error('pointage erroné')
    navigate('/pointage')
  }

  return (
    <>
    <div/>
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
    </>
  )
}

export default PointageHoraireForm
