import React from "react"
import "./TacheCardForm.css"
import SubmitButton from "./buttons/SubmitButton"
import DeleteButton from "./buttons/DeleteButton"
import ButtonFormGroupe from "./buttons/ButtonFormGroupe"

const TacheCardForm = (props) => {
  return (
    <div className={`tache-card ${props.valide}`}>
      <p>
        <strong>{props.tache.nom}</strong>
      </p>

      <div className="tache-card-subcontent">
        <p>{props.salarie.map((el) => el.nom)}</p>

        <div className="tache-card-quantite">
          <p>{props.duree}(h)</p>
          <p>
            {props.quantite}
            {props.tache.unite.nom}
          </p>
        </div>
      </div>
      <ButtonFormGroupe>
        <DeleteButton onClick={() => props.deleteIntervention(props._id)} />
        <SubmitButton
          onClick={() => props.changeHandler({ value: true, name: "valide" }, props._id)}
        />
      </ButtonFormGroupe>
    </div>
  )
}

export default TacheCardForm
