import React, { useEffect, useContext, useState } from "react"
import './PlanningRealise.page.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { AuthContext } from "../../context/AuthContext"
import { message } from "antd"
import { LoadingContext } from "../../context/LoadingContext"
import {useNavigate} from 'react-router-dom'
import ReturnButton from "../../components/buttons/ReturnButton"
import PointagePopup from "../../components/PointagePopup"

const PlanningRealise = () => {
  const { setLoading } = useContext(LoadingContext)
  const { getRequest } = useContext(AuthContext)
  const navigate = useNavigate()
  const [pointages,setPointages] = useState([])
  const [visible, setVisible] = useState(false)
  const [pointageTarget, setPointageTarget] = useState()

  useEffect(() => {
    const getPointages = async () => {
    setLoading(true)
    try {
        const pointagesDataReq = await getRequest(`/pointage`)
        setPointages(pointagesDataReq.data)
        const chantierNomReq = await getRequest(`/chantiers/${pointagesDataReq.data[0].chantierID}`)
        console.log('ZOUZOU',chantierNomReq.data)
    } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
    }
    setLoading(false)
    }
    getPointages()
  }, [])

  function handleClick(info){
    setVisible(true)
    setPointageTarget(info.event.id)
  }

  function handleReturn(){
    navigate('/')
  }

  function toggleVisible(){
    setVisible(!visible)
  }

  return (
    <>
    <PointagePopup pointageTarget={pointageTarget} visible={visible} toggleVisible={toggleVisible}/>
    <div className="calendar-wrap">
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      weekends={false}
      events={pointages.map((item)=>{
        return {
          id: item._id,
          title: '',
          start: item.date,
          allDay: true
        }
      })}
      eventClick={handleClick}
      />
    </div>
    <ReturnButton addClass="planning-return" onClick={handleReturn}/>
    </>
  )
}

export default PlanningRealise
