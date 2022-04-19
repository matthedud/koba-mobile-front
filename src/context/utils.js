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
  const minutes = totalhours * 60 - hours * 60
  const stringMinutess = minutes.toString().padStart(2, 0)
  return `${stringHours}:${stringMinutess}`
}
