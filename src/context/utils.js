import moment from "moment"

export const getHoursFromString = (time) => {
  const timeMoment = moment(time, "HH:mm")
  const hours = timeMoment.hour()
  const minutes = timeMoment.minute()
  return hours + minutes / 60
}

export const makeStringFromNumHours = (totalhours) => {
  const hours = Math.floor(totalhours)
  const stringHours = hours.toString().padStart(2, 0)
  const minutes = Math.floor(totalhours * 60 - hours * 60)
  const stringMinutess = minutes.toString().padStart(2, 0)
  return `${stringHours}:${stringMinutess}`
}

export const goolgleMapFormat = (adresse) => {
  const newAdresse = adresse
    ? (adresse.ligne1 ? adresse.ligne1 : "") +
      (adresse.ligne2 ? " - " + adresse.ligne2 + ", " : ", ") +
      adresse.codePostal +
      " " +
      adresse.ville
    : ""
  const query = encodeURI(newAdresse)
  const googleLink = `https://www.google.com/maps/search/?api=1&query=${query}`

  return { googleLink, adresse: newAdresse }
}


export const heurAPointe = form => form.salarie?.map((salarie) => {
  const heureTravailler = form.intervention?.reduce((total, intervention) => {
    if (intervention.salarie.find((el) => el._id === salarie._id))
      return (total += getHoursFromString(intervention.duree))
    return total
  }, 0)
  const dureeHeure = salarie.dureeHeure - heureTravailler
  const heures = makeStringFromNumHours(dureeHeure)
  return {
    ...salarie,
    heures,
    dureeHeure,
  }
})