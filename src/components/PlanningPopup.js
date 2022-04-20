import React, { useEffect, useState, useContext } from "react"
import { message } from "antd"
import { LoadingContext } from "../context/LoadingContext"
import { AuthContext } from "../context/AuthContext"
import "./PlanningPopup.css"
import moment from 'moment'
import {dateSaveFormat} from '../components/Format/DateFormat'

const PlanningPopup = ({visible, toggleVisible, chantierTarget}) => {
  const { setLoading } = useContext(LoadingContext)
  const { getRequest, user } = useContext(AuthContext)

  useEffect(() => {
    const getChantierDetails = async () => {
    setLoading(true)
    try {
      const tachesDataReq = await getRequest(`/tachesPrevu/${chantierTarget[0]}/${moment(chantierTarget[1]).format(dateSaveFormat)}`)
      console.log(tachesDataReq.data)
    } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
    }
    setLoading(false)
    }
    getChantierDetails()
  }, [chantierTarget]) 

  return (
    <>
        {visible && 
            <div className="plan-pop-fade">
                <div onClick={toggleVisible} className="plan-pop-wrap"></div>
            </div>
        }
    </>
  )
}

export default PlanningPopup