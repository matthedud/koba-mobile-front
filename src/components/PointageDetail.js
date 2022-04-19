import React from "react"
import PointageCard from "./PointageCard";
import './PointageDetail.css'
import TacheCard from "./TacheCard";

const PointageDetail = props => {
  return (
    <>
      <PointageCard {...props} />
      {props.intervention.map((intervention) => (
        <TacheCard
          key={intervention._id}
          {...intervention}
          {...props}
        />
      ))}
    </>
  )
}

export default PointageDetail
