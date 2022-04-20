import React, { useContext, useEffect, useState } from "react"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import SelectInput from "../inputs/SelectInput"
import { AuthContext } from "../../context/AuthContext"
import { message } from "antd"
import Card from "../Card"

const PointageChantierMoForm = () => {
  const { form, onChange } = useContext(FormContext)
  const { getRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const [salaries, setSalaries] = useState([])
  const [chantiers, setChantiers] = useState([])

  useEffect(() => {
    const getChantierSalarier = async () => {
      setLoading(true)
      try {
        const chantierData = await getRequest(`/chantiers`)
        if (chantierData?.data) setChantiers(chantierData.data)
        const salarieData = await getRequest(`/salaries`)
        if (salarieData?.data){
          const salarieList = salarieData.data.map(el=>({...el, nom:`${el.contact.nom} ${el.contact.prenom}`}))
          setSalaries(salarieList)
        }
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getChantierSalarier()
  }, [])

  return (
    <>
    <h1> </h1>
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
      <label htmlFor="salarie">
        Equipe:
        <SelectInput
          name="salarie"
          value={form.salarie}
          placeholder="Equipe"
          isMulti={true}
          onChange={onChange}
          options={salaries}
        />
      </label>
    </Card></>
  )
}

export default PointageChantierMoForm
