import React from "react"
import { useNavigate } from "react-router-dom"
import "./ChantierCardList.css"

const ChantierCardList = (props) => {
    const navigate = useNavigate()

  const onCellClicked = () => navigate("/chantiers/" + props._id)

  return (
    <div className="chantier-card-list">
      <h3>{props.nom}</h3>
      <div className="element-line">
        <div className="element-item">{props.adresse.ville}</div>
        <div className="element-item" onClick={onCellClicked}>DQE</div>
        <div className="element-item">Planning</div>
      </div>
    </div>
  )
}

export default ChantierCardList
