import { message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import InterventionGrid from "../ag-grid/Grids/InterventionGrid"
import {dateSaveFormat} from '../Format/DateFormat'
import moment from 'moment'
import HomeButton from "../buttons/HomeButton"
// import ListInterventionForm from "./ListInterventionForm"

const PointageTacheForm = (props) => {
  const [tacheChantier, setTacheChantier] = useState()
  const [salaries, setSalaries] = useState()
  const { form, setForm, onChange } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const { getRequest } = useContext(AuthContext)

  useEffect(() => {
    const getChantier = async () => {
      setLoading(true)
      try {
        if (!form.intervention) {
          const date = new Date()
          const formatedDate = moment(date).format(dateSaveFormat)
          const interventionData = await getRequest(`/tachesPrevu/${form.chantier._id}/${formatedDate}`)
          console.log({interventionData});
          if (interventionData?.data) setForm({...form, intervention:interventionData?.data})
          else setForm({...form, intervention:[]})
        }
        const salarieData = await getRequest(`/salaries`)
        if (salarieData?.data) {
          const salarieList = salarieData.data.map((el) => ({
            ...el,
            nom: `${el.contact.nom} ${el.contact.prenom}`,
          }))
          setSalaries(salarieList)
        }
        const tacheChantierData = await getRequest(`/tacheChantier/${form.chantier._id}/`)
        console.log({tacheChantierData});
        if (tacheChantierData?.data) setTacheChantier(tacheChantierData?.data)
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getChantier()
  }, [])

  const addTache = () =>{
    const duree = form.heureFin - form.heureDebut
    const newIntervention = {
      _id:'N'+form.intervention.length,
      tacheChantier:null,
      salarie:form.salarie,
      duree,
      quantite:0
    }
    setForm({...form, intervention:[...form.intervention, newIntervention]})
  }

  return (
    <>
      <HomeButton onClick={addTache}>+ Tache</HomeButton>
      <label htmlFor="Tache">Taches:</label>
      {/* <ListInterventionForm salaries={salaries} taches={tacheChantier} /> */}
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
