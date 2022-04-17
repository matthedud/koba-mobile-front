import { message } from "antd"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import InterventionGrid from "../ag-grid/Grids/InterventionGrid"

const PointageTacheForm = (props) => {
  const [tacheChantier, setTacheChantier] = useState()
  const [salaries, setSalaries] = useState()
  const { form, onChange } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const { API_URL } = useContext(AuthContext)

  useEffect(() => {
    const getChantier = async () => {
      setLoading(true)
      try {
        if (!form.intervention) {
          const interventionData = await axios.get(
            `${API_URL}/chantiers-intervention/${form.chantier._id}`
          )
          if (interventionData?.data) onChange(interventionData?.data, "intervention")
        }
        const salarieData = await axios.get(`${API_URL}/salarie`)
        const tacheChantierData = await axios.get(
          `${API_URL}/chantiers-tachechantier/${form.chantier._id}`
        )
        if (tacheChantierData?.data && salarieData?.data) {
          setSalaries(salarieData.data)
          setTacheChantier(tacheChantierData?.data)
        }
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getChantier()
  }, [])

  return (
    <>
      <label htmlFor="Tache">Taches:</label>
      <InterventionGrid
        data={form.intervention}
        editable={true}
        modifHendler={onChange}
        tacheChantier={tacheChantier}
        salaries={salaries}
      />
    </>
  )
}

export default PointageTacheForm
