import React from "react"
import "./PointageCard.css"

const PointageCard = (props) => {
  return (
    <div className="pointage-card">
      <h3>
        <strong>{props.chantier?.nom}</strong>
      </h3>
      <div className="subcontent">
        <div className="element">
          <span>
            <strong>Horaire: </strong>
          </span>
          <span>
            {props.heureDebut} - {props.heureFin}
          </span>
        </div>
        <div className="element">
          <span>
            <strong>Déplacement: </strong>
          </span>
          <span> {props.dureeDeplacement}</span>
        </div>
        <div className="element">
          <span>
            {" "}
            <strong>Equipe :</strong>
          </span>
          <ul>
            {props.salarie?.map((el) => (
              <li key={el._id}>{el.nom}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PointageCard
