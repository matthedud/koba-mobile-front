import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import ChantierListeGrid from '../components/ag-grid/Grids/ChantierListeGrid';
import { AuthContext } from '../context/AuthContext'

const ChantierList = () => {console.log('here');
  const [gridData, setGridData] = useState([])
  const {API_URL} = useContext(AuthContext)

  useEffect(()=>{
    const getDQE = async ()=>{
      const chantierData = await axios.get(`${API_URL}/chantier`)
      console.log("chantierData",chantierData.data);
      if(chantierData?.data) setGridData(chantierData.data)
    }
    getDQE()
  },[])

  return (
    <Fragment>
      <ChantierListeGrid data={gridData} />
    </Fragment>
  )
}

export default ChantierList