import React, { useContext } from "react"
import './PointageDetail.css'
import { FormContext } from "../context/FormContext"
import ListeTache from "./ListeTache"

const PointageDetail = () => {
  const { form, onChange } = useContext(FormContext)
  return (
    <>
      <table className="table-pointage">
        <thead>
          <tr>
            <th>Chantier</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Déplacement</th>
            <th>Equipe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.chantier}</td>
            <td>{form.heureDebut}</td>
            <td>{form.heureFin}</td>
            <td>{form.deplacment}</td>
            <td>
              <ul>{form.salarie?.map((el) => <li>{el.nom}</li>)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
      <ListeTache />
    </>
  )
}

export default PointageDetail
