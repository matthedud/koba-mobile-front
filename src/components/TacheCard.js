import React from "react"
import "./TacheCardForm.css"
import "./TacheCard.css"

const TacheCard = (props) => {
  return (
    props.tacheChantier? 
      <div className={`tache-card`}>
      <p>
        <strong>{props.tacheChantier?.tache.nom}</strong>
      </p>
      <div className="tache-card-subcontent">
        <ul>{props.salarie.map((el) => <li>{el.nom}</li>)}</ul>
        <div className="tache-card-number">
          <p>{props.duree}(h)</p>
          <p>
            {props.quantite}{' '}{props.tacheChantier?.tache.unite.nom}
          </p>
        </div>
      </div>
    </div>
      : null
  )
}

export default TacheCard
