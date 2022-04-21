import React, { useContext } from "react"
import NumberInput from "../inputs/NumberInput"
import SelectInput from "../inputs/SelectInput"
import DurationInput from "../inputs/DurationInput"
import "./TacheCardForm.css"
import CheckButton from "../buttons/CheckButton"
import DeleteButton from "../buttons/DeleteButton"
import ButtonCardGroupe from "../buttons/ButtonCardGroupe"
import { FormContext } from "../../context/FormContext"
import { checkInterventionValid } from "../../context/Validator"
import { getHoursFromString, makeStringFromNumHours } from "../../context/utils"

const TacheCardForm = (props) => {
  const { form, onChange, setForm } = useContext(FormContext)

  const valide = checkInterventionValid(props, true)

  const changeHandler = (event) => {
    const { value, name } = event.target || event
    const index = form.intervention.findIndex((el) => el.idForm === props.idForm)
    if (index > -1) {
      const newValue = [...form.intervention]
      newValue[index] = { ...newValue[index], [name]: value }
      onChange({ value: newValue, name: "intervention" })
    }
  }

  const changeTache = (event) => {
    const { value, name } = event.target || event
    const index = form.intervention.findIndex((el) => el.idForm === props.idForm)
    if (index > -1) {
      const newValue = [...form.intervention]
      const dureeHeure = getHoursFromString(newValue[index].duree)
      const quantite = value.equipe.length
        ? Number(
            (
              (dureeHeure * value.rendementEquipe * newValue[index].salarie.length) /
              value.equipe.length
            ).toFixed(3)
          )
        : 0
      const avancementCalcule = value.quantite
        ? Number(((quantite * 100) / value.quantite).toFixed(3)) + value.avancement
        : 0
      let avancement = avancementCalcule
      let duree = newValue[index].duree
      if (avancementCalcule > 100) {
        avancement = 100
        const newDuree = Math.floor((dureeHeure * 100) / avancementCalcule)
        duree = makeStringFromNumHours(newDuree)
      }
      newValue[index] = { ...newValue[index], [name]: value, avancement, duree }
      onChange({ value: newValue, name: "intervention" })
    }
  }

  const deleteIntervention = () => {
    const index = form.intervention.findIndex((el) => el.idForm === props.idForm)
    if (index > -1) {
      const newIntervention = [...form.intervention]
      newIntervention.splice(index, 1)
      setForm({ ...form, intervention: newIntervention })
    }
  }
  return (
    <div className={`tache-card ${props.invalide && !props.valide ? "invalide" : ""}`}>
      <label>
        {" "}
        Tache:
        <SelectInput
          name="tacheChantier"
          value={props.tacheChantier?.tache}
          placeholder="Tache"
          onChange={changeTache}
          options={props.taches}
          invalide={props.invalide}
        />
      </label>
      {props.tacheChantier ? (
        <div className="tache-card-subcontent">
          <label>
            {" "}
            Main d'Oeuvre:
            <SelectInput
              name="salarie"
              value={props.salarie}
              placeholder="Equipe"
              isMulti={true}
              onChange={changeHandler}
              options={form.salarie}
              invalide={props.invalide}
            />
          </label>
          <label>
            Quantité total: {props.tacheChantier.quantite}
            {props.tacheChantier.tache?.unite?.nom}
          </label>
          <div className="tache-card-quantite">
            <label>
              Durée:
              <DurationInput
                name="duree"
                value={props.duree}
                placeholder="Durée"
                onChange={changeHandler}
                addonAfter="h"
                invalide={props.invalide}
              />
            </label>
            <label>
              avancement:
              <NumberInput
                name="avancement"
                value={props.avancement}
                placeholder="avancement"
                onChange={changeHandler}
                min={props.tacheChantier.avancement}
                max={100}
                addonAfter={"%"}
                invalide={props.invalide}
              />
            </label>
          </div>
        </div>
      ) : null}
      <ButtonCardGroupe>
        <DeleteButton onClick={deleteIntervention} />
        {props.valide ? (
          <div />
        ) : (
          <CheckButton onClick={() => changeHandler({ value: true, name: "valide" }, props._id)} />
        )}
      </ButtonCardGroupe>
    </div>
  )
}

export default TacheCardForm
