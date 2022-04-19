import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import { getHoursFromString, makeStringFromNumHours } from "../../context/utils"
import  './SalarieHeureCompteur.css'

const SalarieHeureCompteur = (props) => {
  const { form } = useContext(FormContext)

  const data = form.salarie?.map((salarie) => {
    const heureTravailler = form.intervention?.reduce((total, intervention) => {
      if (intervention.salarie.find((el) => el._id === salarie._id))
        return (total += getHoursFromString(intervention.duree))
      return total
    }, 0)
    const heures = makeStringFromNumHours(form.dureeHeure - heureTravailler)
    return {
      ...salarie,
      heures
    }
  })

  return <div className="salarie-heure-compteur-card">
    <h2>Heures restant à pointer</h2>
  <ul>{
    data.map(salarie=><li>{`${salarie.nom} : ${salarie.heures}`}</li>)
  }</ul></div>
}

export default SalarieHeureCompteur