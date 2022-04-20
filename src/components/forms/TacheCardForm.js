import React, { useContext } from "react"
import NumberInput from "../inputs/NumberInput"
import SelectInput from "../inputs/SelectInput"
import DurationInput from "../inputs/DurationInput"
import "./TacheCardForm.css"
import CheckButton from "../buttons/CheckButton"
import DeleteButton from "../buttons/DeleteButton"
import ButtonFormGroupe from "../buttons/ButtonFormGroupe"
import { FormContext } from "../../context/FormContext"
import { checkInterventionValid } from "../../context/utils"

const TacheCardForm = (props) => {
  const { form, onChange, setForm } = useContext(FormContext)

  const valide = checkInterventionValid(props, true)

  const changeHandler = (event) => {
    const { value, name } = event.target || event
    const index = form.intervention.findIndex((el) => el._id === props._id)
    if (index > -1) {
      const newValue = [...form.intervention]
      newValue[index] = { ...newValue[index], [name]: value }
      onChange({ value: newValue, name: "intervention" })
    }
  }
  
  const deleteIntervention = () => {
    const index = form.intervention.findIndex((el) => el._id === props._id)
    if (index > -1) {
      const newIntervention = [...form.intervention]
      newIntervention.splice(index, 1)
      setForm({ ...form, intervention: newIntervention })
    }
  }

  return (
    <div className={`tache-card ${valide}`}>
      <SelectInput
        name="tacheChantier"
        value={props.tacheChantier?.tache}
        placeholder="Tache"
        onChange={changeHandler}
        options={props.taches}
      />
      {props.tacheChantier?
      <div className="tache-card-subcontent">
        <SelectInput
          name="salarie"
          value={props.salarie}
          placeholder="Equipe"
          isMulti={true}
          onChange={changeHandler}
          options={form.salarie}
        />
        <div className="tache-card-quantite">
          <DurationInput
            name="duree"
            value={props.duree}
            placeholder="Durée"
            onChange={changeHandler}
            addonAfter='h'
          />
          <NumberInput
            name="quantite"
            value={props.quantite}
            placeholder="quantite"
            onChange={changeHandler}
            addonAfter={props.tacheChantier.tache?.unite?.nom}
          />
        </div>
      </div>
      :null}
      <ButtonFormGroupe>
        <DeleteButton onClick={deleteIntervention} />
        {props.valide ? <div/> : (
          <CheckButton
            onClick={() => changeHandler({ value: true, name: "valide" }, props._id)}
          />
        )}
      </ButtonFormGroupe>
    </div>
  )
}

export default TacheCardForm
