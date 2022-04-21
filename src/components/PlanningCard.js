import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import "./PlanningCard.css"

const PlanningCard = (props) => {

  function cardClick(){
    props.setchantierTarget([props.chantier, props.jour])
    props.toggleVisible()
  }

  return (
      <div className="plan-card-wrap" onClick={cardClick}>
        <h2>{props.nom}</h2>
        <div className="plan-card-icons">
            <div>
                <BsFillPersonFill/>
                <span>{props.personnes}</span>
            </div>
            <div>
                <BiTask/>
                <span>{props.taches}</span>
            </div>
        </div>
      </div>
    
  )
}

export default PlanningCard