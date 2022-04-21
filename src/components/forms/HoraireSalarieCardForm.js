import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import Card from "../Card"
import TimeInput from "../inputs/TimeInput"

const HoraireSalarieCardForm = (props) => {
  const { form, onChange } = useContext(FormContext)

  const changeHandler = (event) => {
    const { value, name } = event.target || event
    const index = form.salarie.findIndex((el) => el._id === props._id)
    if (index > -1) {
      const newValue = [...form.salarie]
      newValue[index] = { ...newValue[index], [name]: value }
      onChange({ value: newValue, name: "salarie" })
    }
  }

  return (
    <Card>
    <h3>{props.nom}</h3>
      <div>
        Horaire sur chantier:
        <div className="horaire-chantier">
          <TimeInput
            name="heureDebut"
            value={props.heureDebut}
            placeholder=" "
            onChange={changeHandler}
          />
          <TimeInput
            name="heureFin"
            value={props.heureFin}
            placeholder=" "
            onChange={changeHandler}
          />
        </div>
      </div>
    </Card>
  )
}

export default HoraireSalarieCardForm
