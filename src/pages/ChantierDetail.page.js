import React, { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import DQEGrid from "../components/ag-grid/Grids/DQEGrid"
import { LoadingContext } from "../context/LoadingContext"
import { message } from "antd"

const ChantierDetail = () => {
  const { chantierID } = useParams()
  const [gridData, setGridData] = useState([])
  const { getRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)

  useEffect(() => {
    const getDQE = async () => {
      setLoading(true)
      try {
        const DQEData = await getRequest(`/chantiers/${chantierID}`)
        if (DQEData?.data) setGridData([...DQEData.data.poste, ...DQEData.data.posteGroupe])
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
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
      <DQEGrid data={gridData} bottomData={bottomData} />
    </Fragment>
  )
}

export default ChantierDetail
