import { message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import { dateSaveFormat } from "../Format/DateFormat"
import moment from "moment"
import { AiOutlinePlusCircle } from 'react-icons/ai'
import ListInterventionForm from "./ListInterventionForm"
import { useNavigate } from "react-router-dom"
import ButtonComp from "../buttons/ButtonComp"

const PointageTacheForm = (props) => {
  const [tacheChantier, setTacheChantier] = useState()
  const [salaries, setSalaries] = useState()
  const { form, setForm } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const { getRequest } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const getChantier = async () => {
      setLoading(true)
      try {
        if (!form.intervention) {
          const date = new Date()
          const formatedDate = moment(date).format(dateSaveFormat)
          const tacheChantierData = await getRequest(
            `/tachesPrevu/${form.chantier._id}/${formatedDate}`
          )
          if (tacheChantierData?.data) {
            const intervention = tacheChantierData?.data.map((el) => {
              const quantite = Number(
                (
                  (form.dureeHeure * el.rendementEquipe * form.salarie.length) /
                  el.equipe.length
                ).toFixed(3)
              )
              return {
                ...el,
                tacheChantier:{...el},
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
    setForm({ ...form, intervention: [newIntervention, ...form.intervention] })
  }

  const deleteIntervention = (_id) => {
    const index = form.intervention.findIndex((el) => el._id === _id)
    if (index > -1) {
      const newIntervention = [...form.intervention]
      newIntervention.splice(index, 1)
      setForm({ ...form, intervention: newIntervention })
    }
  }

  
  if(!form.chantier){
    message.error('pointage erroné')
    navigate('/pointage')
  }
  return (
    <>
      <ButtonComp onClick={addTache}><AiOutlinePlusCircle /> Tache <div/></ButtonComp>
      <ListInterventionForm
        salaries={salaries}
        taches={tacheChantier}
        deleteIntervention={deleteIntervention}
      />
    </>
  )
}

export default PointageTacheForm
