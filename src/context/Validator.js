import { message } from "antd"
import { getHoursFromString } from "./utils"




export const checkInterventionValid = (intervention, noFeedBack) =>{
    if(!intervention.valide){
      if (!noFeedBack) message.error('Valider la tache')
      return false
    }
    if(!intervention.tacheChantier){
      if (!noFeedBack) message.error('entrer une Tache')
      return false
    }
    if(intervention.salarie?.length<1){
      if (!noFeedBack) message.error('entrer un salarier')
      return false
    }
    if(!intervention.quantite && intervention.quantite!==0){
      if (!noFeedBack) message.error('entrer une quantite')
      return false
    }
    if(!intervention.avancement){
      if (!noFeedBack) message.error('entrer une avancement')
      return false
    }
    if(!intervention.duree){
      if (!noFeedBack) message.error('entrer une quantite')
      return false
    } else if(isNaN(getHoursFromString(intervention.duree))){
      if (!noFeedBack) message.error('entrer une quantite')
      return false
    }
    return true
  }
  
export  const validHoraire = horaire =>{
    if (!horaire.heureDebut) {
        message.error("entrer l'heure de début sur chantier")
        return false
      }
      if (!horaire.heureFin) {
        message.error("entrer l'heure de fin de chantier")
        return  false
      }
      if (getHoursFromString(horaire.heureFin) < getHoursFromString(horaire.heureDebut)) {
        message.error("L'heure de Début doit être inférieur à l'heure de fin")
        return false
      }
      return true
  }