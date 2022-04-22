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
import { makeStringFromNumHours, heurAPointe, getHoursFromString } from "../../context/utils"

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
            const dureeHeure = tacheChantierData?.data.length
              ? form.dureeHeure / tacheChantierData?.data.length
              : 0
            const duree = makeStringFromNumHours(dureeHeure)
            const intervention = tacheChantierData?.data.map((el) => {
              const quantite = Number(
                (
                  (dureeHeure * el.rendementEquipe * form.salarie.length) /
                  el.equipe.length
                ).toFixed(3)
              )
              const avancement = el.quantite
                ? Number(((quantite * 100) / el.quantite).toFixed(2)) + el.avancement
                : 0
              counter++
              return {
                idForm: "N" + counter,
                tacheChantier: { ...el },
                nom: el.tache.nom,
                duree: duree,
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
    const dureeResetant = heurAPointe(form)
    const duree = dureeResetant.reduce((res, salarie) => {
      const numRes = getHoursFromString(res)
      if (numRes > salarie.dureeHeure &&  salarie.dureeHeure>0) {
        return makeStringFromNumHours(salarie.dureeHeure)
      }
      return res
    }, form.duree)
    counter++
    const newIntervention = {
      idForm: "N" + counter,
      tacheChantier: null,
      salarie: form.salarie,
      duree,
      valide: true,
      quantite: 0,
    }
    setForm({ ...form, intervention: [newIntervention, ...form.intervention] })
  }

  return (
    <>
      <ButtonComp onClick={addTache}>
        <AiOutlinePlusCircle /> Ajouter Tache <div />
      </ButtonComp>
      {form?.intervention ? (
          <SalarieHeureCompteur />
      ) : null}
      {form?.intervention?.length > 0
        ? form.intervention.map((intervention) => (
            <TacheCardForm key={intervention.idForm} {...intervention} taches={tacheChantier} />
          ))
        : null}

      <div style={{ marginBottom: "5rem" }}></div>
    </>
  )
}

export default PointageTacheForm
