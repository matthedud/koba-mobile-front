import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { FormContext } from "../../context/FormContext"
import { LoadingContext } from "../../context/LoadingContext"
import { message } from "antd"
import SelectInput from "../inputs/SelectInput"

const PointageChantierMoForm = () => {
  const { form, onChange } = useContext(FormContext)
  const { setLoading } = useContext(LoadingContext)
  const [salaries, setSalaries] = useState([])
  const [chantiers, setChantiers] = useState([])

  useEffect(() => {
    const getChantierSalarier = async () => {
      setLoading(true)
      try {
        const chantierData = await axios.get("")
      } catch (err) {
        message.err("erreur de connection")
        console.log({err});
      }
      setLoading(false)
    }
  })

  return (
    <>
      <label htmlFor="chantier">
        Chantier
        <SelectInput
          name="chantier"
          value={form.chantier}
          placeholder="Chantier"
          onChange={onChange}
          options={chantiers}
        />
      </label>
      <label htmlFor="salarie">
        Equipe
        <SelectInput
          name="salarie"
          value={form.salarie}
          placeholder="Equipe"
          isMulti={true}
          onChange={onChange}
          options={salaries}
        />
      </label>
    </>
  )
}

export default PointageChantierMoForm
