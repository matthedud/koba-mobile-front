import { message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import { dateSaveFormat } from "../Format/DateFormat"
import moment from "moment"
import HomeButton from "../buttons/HomeButton"
import ListInterventionForm from "./ListInterventionForm"

const PointageTacheForm = (props) => {
  const [tacheChantier, setTacheChantier] = useState()
  const [salaries, setSalaries] = useState()
  const { form, setForm } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const { getRequest } = useContext(AuthContext)

  useEffect(() => {
    const getChantier = async () => {
      setLoading(true)
      try {
        if (!form.intervention) {
          const date = new Date()
          const formatedDate = moment(date).format(dateSaveFormat)
          const interventionData = await getRequest(
            `/tachesPrevu/${form.chantier._id}/${formatedDate}`
          )
          if (interventionData?.data) {
            const intervention = interventionData?.data.map((el) => {
              const quantite = Number(
                (
                  (form.dureeHeure * el.rendementEquipe * form.salarie.length) /
                  el.equipe.length
                ).toFixed(3)
              )
              return {
                ...el,
                nom: el.tache.nom,
                duree: form.duree,
                quantite,
                valide: false,
                salarie: form.salarie,
              }
            })
            setForm({ ...form, intervention })
          } else setForm({ ...form, intervention: [] })
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
        if (tacheChantierData?.data) {
          const tacheList = tacheChantierData?.data.map((el) => ({
            ...el,
            nom: el.tache.nom,
          }))
          setTacheChantier(tacheList)
        }
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getChantier()
  }, [])

  const addTache = () => {
    const duree = form.duree
    const newIntervention = {
      _id: "N" + form.intervention.length,
      tacheChantier: null,
      salarie: form.salarie,
      duree,
      quantite: 0,
    }
    setForm({ ...form, intervention: [...form.intervention, newIntervention] })
  }

  const deleteIntervention = (_id) => {
    const index = form.intervention.findIndex((el) => el._id === _id)
    if (index > -1) {
      const newIntervention = [...form.intervention]
      newIntervention.splice(index, 1)
      setForm({ ...form, intervention: newIntervention })
    }
  }

  return (
    <>
      <HomeButton onClick={addTache}>+ Tache</HomeButton>
      <label htmlFor="Tache">Taches:</label>
      <ListInterventionForm
        salaries={salaries}
        taches={tacheChantier}
        deleteIntervention={deleteIntervention}
      />
    </>
  )
}

export default PointageTacheForm
