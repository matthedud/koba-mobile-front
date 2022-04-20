import { message } from "antd"
import moment from "moment"

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
  if(!intervention.duree){
    if (!noFeedBack) message.error('entrer une quantite')
    return false
  } else if(isNaN(getHoursFromString(intervention.duree))){
    if (!noFeedBack) message.error('entrer une quantite')
    return false
  }
  return true
}

export const getHoursFromString = (time) => {
  const timeMoment = moment(time, "HH:mm")
  const hours = timeMoment.hour()
  const minutes = timeMoment.minute()
  return hours + minutes / 60
}

export const makeStringFromNumHours = (totalhours) => {
  const hours = Math.floor(totalhours)
  const stringHours = hours.toString().padStart(2, 0)
  const minutes = totalhours * 60 - hours * 60
  const stringMinutess = minutes.toString().padStart(2, 0)
  return `${stringHours}:${stringMinutess}`
}

export const goolgleMapFormat = adresse => {
  const newAdresse = (
      adresse ?
      (adresse.ligne1?adresse.ligne1:'') + 
      (adresse.ligne2?' - '+adresse.ligne2+', ':', ') + 
      adresse.codePostal + ' ' + adresse.ville
      : ''
  )
  const query = encodeURI(newAdresse)
  const googleLink = `https://www.google.com/maps/search/?api=1&query=${query}`
  
  return {googleLink, adresse: newAdresse}
}