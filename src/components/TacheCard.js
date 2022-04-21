import React from "react"
import "./forms/TacheCardForm.css"
import "./TacheCard.css"

const TacheCard = (props) => {
  return props.tacheChantier ? (
    <div className={`tache-card-valid`}>
    <div className="tache-title">
      <h3> {props.tacheChantier?.tache.nom} </h3>
      <span className="tache-quantite">{` - ${props.tacheChantier.quantite} ${props.tacheChantier?.tache.unite.nom}`}</span>
    </div>
      <div className="tache-card-subcontent">
        <ul>
          {props.salarie.map((el) => (
            <li>{el.nom}</li>
          ))}
        </ul>
        <div className="tache-card-number">
          <p><span className="tache-label">Durée: </span>{` ${props.duree}h`}</p>
          <p><span className="tache-label">Avancement: </span>{` ${Number(props.avancement.toFixed(2))}%`}</p>
        </div>
      </div>
    </div>
  ) : null
}

export default TacheCard
