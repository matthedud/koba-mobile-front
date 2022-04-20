import { Upload, message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonFormGroupe from "../components/buttons/ButtonFormGroupe"
import ReturnButton from "../components/buttons/ReturnButton"
import SubmitButton from "../components/buttons/SubmitButton"
import Card from "../components/Card"
import SelectInput from "../components/inputs/SelectInput"
import TextInput from "../components/inputs/TextInput"
import { AuthContext } from "../context/AuthContext"
import { FormContext } from "../context/FormContext"
import { LoadingContext } from "../context/LoadingContext"

const PhotoTake = () => {
  const navigate = useNavigate()
  const { form, onChange, setForm } = useContext(FormContext)
  const { getRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const [chantiers, setChantiers] = useState([])
  const [tacheChantier, setTacheChantier] = useState([])

  useEffect(() => {
    const getChantierSalarier = async () => {
      setLoading(true)
      try {
        const chantierData = await getRequest(`/chantiers`)
        if (chantierData?.data) setChantiers(chantierData.data)
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getChantierSalarier()
  }, [])


  useEffect(() => {
    onChange({value:null, name:'tacheChantier'})
    if(form.chantier){
      const getTachanChantier = async () => {
        setLoading(true)
        try {
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
      getTachanChantier()
    }
  }, [form.chantier])


  const handleSubmit = () => {
    setForm({})
    message.info('photo sauvegardée')
    navigate("/")
  }

  const handleReturn = () => {
    navigate("/")
  }


  return (
    <div>
      <Card>
        <label htmlFor="chantier">
          Chantier:
          <SelectInput
            name="chantier"
            value={form.chantier}
            placeholder="Chantier"
            onChange={onChange}
            options={chantiers}
          />
        </label>
        {form.chantier ? (
          <label htmlFor="poste">
            Poste:
            <SelectInput
              name="poste"
              value={form.poste}
              placeholder="poste"
              onChange={onChange}
              options={form.chantier?.poste}
              isMulti
            />
          </label>
        ) : null}
        <input type="file" accept="image/x-png,image/jpeg,image/gif" />
        <label htmlFor="salarie">
          Commentaire:
          <TextInput
          name="commentaire"
          value={form.commentaire}
          placeholder="Commentaire"
          onChange={onChange}
        />
        </label>
      </Card>
      <ButtonFormGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFormGroupe>
    </div>
  )
}

export default PhotoTake
