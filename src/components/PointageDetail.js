import React, { useContext } from "react"
import { FormContext } from "../context/FormContext";
import PointageCard from "./PointageCard";
import './PointageDetail.css'
import TacheCard from "./TacheCard";

const PointageDetail = props => {
  const {form} = useContext(FormContext)
  return (
    <>
      <PointageCard {...form} />
      {form.intervention.map((intervention) => (
        <TacheCard
          key={intervention._id}
          {...intervention}
          {...form}
        />
      ))}
    </>
  )
}

export default PointageDetail
