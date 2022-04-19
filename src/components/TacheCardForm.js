import React from "react"
import NumberInput from "./inputs/NumberInput"
import SelectInput from "./inputs/SelectInput"
import DurationInput from "./inputs/DurationInput"
import "./TacheCardForm.css"
import CheckButton from "./buttons/CheckButton"
import DeleteButton from "./buttons/DeleteButton"
import ButtonFormGroupe from "./buttons/ButtonFormGroupe"

const TacheCardForm = (props) => {
  return (
    <div className={`tache-card ${props.valide}`}>
      <SelectInput
        name="tache"
        value={props.tache}
        placeholder="Tache"
        onChange={(event) => props.changeHandler(event, props._id)}
        options={props.taches}
      />
      {props.tache?
      <div className="tache-card-subcontent">
        <SelectInput
          name="salarie"
          value={props.salarie}
          placeholder="Equipe"
          isMulti={true}
          onChange={(event) => props.changeHandler(event, props._id)}
          options={props.salaries}
        />
        <div className="tache-card-quantite">
          <DurationInput
            name="duree"
            value={props.duree}
            placeholder="Durée"
            onChange={(event) => props.changeHandler(event, props._id)}
            addonAfter='h'
          />
          <NumberInput
            key={props.tache._id}
            name="quantite"
            value={props.quantite}
            placeholder="quantite"
            onChange={(event) => props.changeHandler(event, props._id)}
            addonAfter={props.tache?.unite?.nom}
          />
        </div>
      </div>
      :null}
      <ButtonFormGroupe>
        <DeleteButton onClick={() => props.deleteIntervention(props._id)} />
        {props.valide ? <div/> : (
          <CheckButton
            onClick={() => props.changeHandler({ value: true, name: "valide" }, props._id)}
          />
        )}
      </ButtonFormGroupe>
    </div>
  )
}

export default TacheCardForm
