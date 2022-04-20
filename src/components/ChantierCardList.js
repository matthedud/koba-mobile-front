import React from "react"
import { useNavigate } from "react-router-dom"
import "./ChantierCardList.css"
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { goolgleMapFormat } from "../context/utils"

const ChantierCardList = (props) => {
    const navigate = useNavigate()

  const onCellClicked = () => navigate("/chantiers/" + props._id)

  const {googleLink} = goolgleMapFormat(props.adresse)

  return (
    <div className="chantier-card-list">
      <h3>{props.nom}</h3>
      <div className="element-line">
      <a className="adresse-link" href={googleLink} target="_blank" rel="noopener noreferrer">
        <div className="element-item">{props.adresse.ville}<FaMapMarkedAlt/></div>
        </a>
        <div className="element-item" onClick={onCellClicked}>DQE<AiOutlineUnorderedList/></div>
        <div className="element-item" onClick={()=>{}}>Planning<BsFillCalendarDateFill/></div>
      </div>
    </div>
  )
}

export default ChantierCardList
