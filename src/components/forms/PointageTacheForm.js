import React, { useContext, useEffect, useState } from "react"
import moment from "moment"
import { message } from "antd"
import { AuthContext } from "../../context/AuthContext"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import { dateSaveFormat } from "../Format/DateFormat"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import ButtonComp from "../buttons/ButtonComp"
import TacheCardForm from "./TacheCardForm"
import SalarieHeureCompteur from "../SalarieHeureCompteur"
import Card from "../Card"

let counter = 0

const PointageTacheForm = (props) => {
  const [tacheChantier, setTacheChantier] = useState()
  const { form, setForm } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const { getRequest } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!form.chantier) {
      message.error("pointage erroné")
      navigate("/pointage")
    }
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
              const avancement = el.quantite? Number((quantite*100/el.quantite).toFixed(2))+ el.avancement: 0
              counter++
              return {
                _id: "N" + counter,
                tacheChantier: { ...el },
                nom: el.tache.nom,
                duree: form.duree,
                quantite,
                avancement,
                valide: false,
                salarie: form.salarie,
              }
            })
            setForm({ ...form, intervention })
          } else setForm({ ...form, intervention: [] })
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
    counter++
    const newIntervention = {
      _id: "N" + counter,
      tacheChantier: null,
      salarie: form.salarie,
      duree,
      valide: true,
      quantite: 0,
    }
    setForm({ ...form, intervention: [newIntervention, ...form.intervention] })
  }

  const refreshHeureTravailler = () => {}

  return (
    <>
      <ButtonComp onClick={addTache}>
        <AiOutlinePlusCircle /> Ajouter Tache <div />
      </ButtonComp>
      {form?.intervention?.length > 0
        ? form.intervention.map((intervention) => (
            <TacheCardForm key={intervention._id} {...intervention} taches={tacheChantier} />
          ))
        : null}
      {form?.intervention ? (
        <Card>
          <SalarieHeureCompteur />
        </Card>
      ) : null}
      <div style={{marginBottom: "5rem"}}></div>
    </>
  )
}

export default PointageTacheForm
