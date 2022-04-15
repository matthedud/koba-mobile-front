import { Button, message } from "antd"
import axios from "axios"
import React, { Fragment, useContext, useEffect, useState } from "react"
import ChantierListeGrid from "../components/ag-grid/Grids/ChantierListeGrid"
import { AuthContext } from "../context/AuthContext"
import { LoadingContext } from "../context/LoadingContext"

const ChantierList = () => {
  console.log("here")
  const [gridData, setGridData] = useState([])
  const { API_URL } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)

  useEffect(() => {
    const getDQE = async () => {
      setLoading(true)
      try{
        const chantierData = await axios.get(`${API_URL}/chantier`)
        console.log("chantierData", chantierData.data)
        if (chantierData?.data) setGridData(chantierData.data)
      }
      catch(err){
        message.error('erreur de connexion')
        console.log({err});
      }
      setLoading(false)
    }
    getDQE()
  }, [])

  return (
    <Fragment>
      <ChantierListeGrid data={gridData} />
      <Button onClick={()=>message.error('This is an error message')} >Hey</Button>
    </Fragment>
  )
}

export default ChantierList
