import React, { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { heurAPointe } from "../context/utils"
import  './SalarieHeureCompteur.css'
 
const SalarieHeureCompteur = (props) => {
  const { form } = useContext(FormContext)

  const data = heurAPointe(form)

  return <div className="salarie-heure-compteur-card">
    <label>Heures restant à pointer:</label>
  <ul>{
    data.map(salarie=>salarie.dureeHeure?<li key={salarie._id}>{`${salarie.nom} : ${salarie.heures}`}</li>:null)
  }</ul></div>
}

export default SalarieHeureCompteur
