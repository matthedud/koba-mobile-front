import React from "react"
import NumberInput from "./inputs/NumberInput"
import SelectInput from "./inputs/SelectInput"
import DurationInput from "./inputs/DurationInput"
import "./TacheCardForm.css"
import { Button } from "antd/lib/radio"
import SubmitButton from "./buttons/SubmitButton"
import DeleteButton from "./buttons/DeleteButton"
import ButtonFormGroupe from "./buttons/ButtonFormGroupe"

const TacheCardForm = (props) => {
  return (
    <div className={`tache-card ${props.valide}`}>
      <SelectInput
        name="tache"
        value={props.tache}
        placeholder="Tache"
        onChange={props.changeHandler}
        options={props.taches}
      />
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
              onChange={props.changeHandler}
            />
            <NumberInput
              name="quantite"
              value={props.quantite}
              placeholder="quantite"
              onChange={props.changeHandler}
              addonAfter={props.tache?.unite?.nom}
            />
        </div>
      </div>
      <ButtonFormGroupe>
        {props.valide ? null : <SubmitButton onClick={() => props.deleteIntervention(props._id)} />}
        <DeleteButton onClick={() => props.deleteIntervention(props._id)} />
      </ButtonFormGroupe>
    </div>
  )
}

export default TacheCardForm
