import React from "react"
import './PointageDetail.css'
import InterventionGrid from "./ag-grid/Grids/InterventionGrid"

const PointageDetail = props => {
  console.log({props});
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
            <td>{props.chantier?.nom}</td>
            <td>{props.heureDebut}</td>
            <td>{props.heureFin}</td>
            <td>{props.dureeDeplacement}</td>
            <td>
              <ul>{props.salarie?.map((el) => <li key={el._id} >{el.nom}</li>)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
      <InterventionGrid data= {props.intervention} editable={false}/>
    </>
  )
}

export default PointageDetail
