import React from 'react'
import PlanningHebdo from './PlanningHebdo.page'
import HomeButton from "../../components/buttons/HomeButton"
import {useNavigate} from 'react-router-dom'
import './PlanningHome.page.css'

const Planning = () => {
  const navigate = useNavigate()
  return (
    <div className="planning-menu">
      <HomeButton onClick={() => navigate("./planning-hebdo")} >{ 'Planning Prévisionnel' }<div/></HomeButton>
      <HomeButton onClick={() => navigate("./planning-realise")} >{"Planning Réalisé"}<div/></HomeButton>
    </div>
  )
}

export default Planning
