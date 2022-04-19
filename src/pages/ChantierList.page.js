import { message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ReturnButton from "../components/buttons/ReturnButton"
import ChantierCardList from "../components/ChantierCardList"
import { AuthContext } from "../context/AuthContext"
import { LoadingContext } from "../context/LoadingContext"

const ChantierList = () => {
  const [gridData, setGridData] = useState([])
  const { getRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const navigate = useNavigate()

  useEffect(() => {
    const getDQE = async () => {
      setLoading(true)
      try{
        const chantierData = await getRequest(`/chantiers`)
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
    <>
      {gridData.map(chantier=><ChantierCardList key={chantier._id} {...chantier} />)}
      <ReturnButton onClick={()=>navigate('/')} />

    </>
  )
}

export default ChantierList
