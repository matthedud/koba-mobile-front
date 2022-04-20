import React from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { goolgleMapFormat } from "../context/utils"
import Card from "./Card"

const ChantierCardList = (props) => {
    const navigate = useNavigate()

  const onCellClicked = () => navigate("/chantiers/" + props._id)

  const {googleLink} = goolgleMapFormat(props.adresse)

  return (
    <Card>
      <h3>{props.nom}</h3>
      <div className="element-line">
      <a className="element-item" href={googleLink} target="_blank" rel="noopener noreferrer">
        {props.adresse.ville}<FaMapMarkedAlt/>
        </a>
        <div className="element-item" onClick={onCellClicked}>DQE<AiOutlineUnorderedList/></div>
        <div className="element-item" onClick={()=>{}}>Planning<BsFillCalendarDateFill/></div>
      </div>
    </Card>
  )
}

export default ChantierCardList
