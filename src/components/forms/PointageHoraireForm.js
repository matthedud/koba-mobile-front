import { message } from "antd"
import axios from "axios"
import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import TimeInput from "../inputs/TimeInput"

const PointageHoraireForm = (props) => {
  const { form, onChange, setForm } = useContext(FormContext)
  const { API_URL } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)

  useEffect(() => {
    const getChantier = async () => {
      setLoading(true)
      try {
        const chantierData = await axios.get(`${API_URL}/chantiers/${form.chantier._id}`)
        if (chantierData?.data)
          setForm({
            ...form,
            heureDebut: chantierData?.data.heureDebut,
            heureFin: chantierData?.data.heurFin,
            dureeDeplacement: chantierData?.data.dureeDeplacement,
          })
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
      <label htmlFor="heureDebut">
        Heure Démarrage:
        <TimeInput
          name="heureDebut"
          value={form.heureDebut}
          placeholder="Démarrage"
          onChange={onChange}
        />
      </label>

      <label htmlFor="heureFin">
        Heure Fin:
        <TimeInput
          name="heureFin"
          value={form.heureFin}
          placeholder="Heure Fin"
          onChange={onChange}
        />
      </label>

      <label htmlFor="dureeDeplacement">
        Durée Déplacement:
        <TimeInput
          name="dureeDeplacement"
          value={form.dureeDeplacement}
          placeholder="Durée Déplacement"
          onChange={onChange}
        />
      </label>
    </>
  )
}

export default PointageHoraireForm
