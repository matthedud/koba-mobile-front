import React, { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { heurAPointe } from "../context/utils"
import Card from "./Card"
import  './SalarieHeureCompteur.css'
 
const SalarieHeureCompteur = (props) => {
  const { form } = useContext(FormContext)

  const data = heurAPointe(form).filter(el=>el.dureeHeure)

  return data.length<1?null:<Card> <div className="salarie-heure-compteur-card">
    <label>Heures restant à pointer:</label>
  <ul>{
    data.map(salarie=><li key={salarie._id}>{`${salarie.nom} : ${salarie.heures}`}</li>)
  }</ul></div>
        </Card>
      }

export default SalarieHeureCompteur
