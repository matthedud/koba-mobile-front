import React from "react"
import Card from "../Card"
import TimeInput from "../inputs/TimeInput"

const HoraireSalarieCardForm = (props) => {
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
            onChange={props.onChange}
          />
          <TimeInput
            name="heureFin"
            value={props.heureFin}
            placeholder=" "
            onChange={props.onChange}
          />
        </div>
      </div>
    </Card>
  )
}

export default HoraireSalarieCardForm
