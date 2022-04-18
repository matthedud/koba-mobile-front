import React, { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import SelectInput from "../inputs/SelectInput"
import TimeInput from "../inputs/TimeInput"

const ListInterventionForm = (props) => {
  const { form, onChange } = useContext(FormContext)

  const changeHandler = (event, _id) => {
    const { value, name } = event.target || event
    const index = form.intervention.findIndex((el) => el._id === _id)
    if (index > -1) {
      const newValue = [...form.intervention]
      newValue[index] = { ...newValue[index], [name]: value }
      onChange(newValue, "intervention")
    }
  }

  return (
    <table className="table-pointage">
      <thead>
        <tr>
          <th>M.O.</th>
          <th>Taches</th>
          <th>Durée</th>
          <th>Unité</th>
          <th>Quantite</th>
        </tr>
      </thead>
      <tbody>
        {
          form?.intervention?.length>0?
          form.intervention.map((intervention) => (
          <tr key={intervention._id}>
            <td>
              <SelectInput
                name="salarie"
                value={intervention.salarie}
                placeholder="Equipe"
                isMulti={true}
                onChange={(event) => changeHandler(event, intervention._id)}
                options={props.salaries}
              />
            </td>
            <td>
              <SelectInput
                name="tache"
                value={intervention.tache}
                placeholder="Tache"
                onChange={changeHandler}
                options={props.taches}
              />
            </td>
            <td>
              <TimeInput
                name="duree"
                value={intervention.duree}
                placeholder="Durée"
                onChange={changeHandler}
              />
            </td>
            <td>{intervention.tache?.unite?.nom}</td>
            <td>{intervention.quantite}</td>
            <td>remove</td>
          </tr>
        )):null}
      </tbody>
    </table>
  )
}

export default ListInterventionForm
