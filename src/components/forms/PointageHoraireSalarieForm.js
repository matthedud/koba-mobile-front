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
          <HoraireSalarieCardForm key={salarie._id} {...salarie} />
        ))}
      </div>
    </>
  )
}

export default PointageHoraireSalarieForm
