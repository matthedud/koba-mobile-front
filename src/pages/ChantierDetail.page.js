import React, { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import DQEGrid from "../components/ag-grid/Grids/DQEGrid"

const ChantierDetail = () => {
  const { chantierID } = useParams()
  const [gridData, setGridData] = useState([])
  const { API_URL } = useContext(AuthContext)

  useEffect(() => {
    const getDQE = async () => {
      const DQEData = await axios.get(`${API_URL}/api/chantier/${chantierID}`)
      if (DQEData?.data) setGridData([...DQEData.data.poste, ...DQEData.data.posteGroupe])
    }
    getDQE()
  }, [chantierID])

  const total = gridData.reduce(
    (total, poste) => (poste?.quantite ? total + poste.prixUnitaire * poste.quantite : total),
    0
  )

  const bottomData = [
    {
      hierarchie: [""],
      total: total,
      nature: "footer",
    },
  ]

  return (
    <Fragment>
      <DQEGrid gridData={gridData} bottomData={bottomData} />
    </Fragment>
  )
}

export default ChantierDetail
