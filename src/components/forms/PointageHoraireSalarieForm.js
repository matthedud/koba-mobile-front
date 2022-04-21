import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import HoraireSalarieCardForm from "./HoraireSalarieCardForm"

const PointageHoraireSalarieForm = () => {
  const { form, onChange, setForm } = useContext(FormContext)

  return (
    <>
      <h1>Horaire Equipe</h1>
      <div>
        {form.salarie.map((salarie) => (
          <HoraireSalarieCardForm {...salarie} />
        ))}
      </div>
    </>
  )
}

export default PointageHoraireSalarieForm
