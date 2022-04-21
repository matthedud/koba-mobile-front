import React, { useEffect, useState, useContext } from "react"
import { message } from "antd"
import { LoadingContext } from "../context/LoadingContext"
import { AuthContext } from "../context/AuthContext"
import "./PlanningPopup.css"
import moment from 'moment'
import {dateSaveFormat} from '../components/Format/DateFormat'
import ChantierCardList from '../components/ChantierCardList'
import ReturnButton from "../components/buttons/ReturnButton"


const PlanningPopup = ({visible, toggleVisible, chantierTarget}) => {
  const { setLoading } = useContext(LoadingContext)
  const { getRequest, user } = useContext(AuthContext)
  const [taches, setTaches] = useState([])

  function stopPropagation(e) {
    e.stopPropagation()
  }

  useEffect(() => {
    const getChantierDetails = async () => {
    setLoading(true)
    try {
      if(!chantierTarget?.length<1){
        const tachesDataReq = await getRequest(`/tachesPrevu/${chantierTarget[0].chantierID._id}/${moment(chantierTarget[1]).format(dateSaveFormat)}`)
        setTaches(tachesDataReq.data)
      }
    } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
    }
    setLoading(false)
    }
    getChantierDetails()
  }, ([chantierTarget]))

  return (
    <>
      {visible &&
          <div className="plan-popup-fade" onClick={toggleVisible}>
              <div className="plan-popup-wrap" onClick={stopPropagation}>
                <div>
                  <ChantierCardList key={chantierTarget} {...chantierTarget[0].chantierID} />
                  <div className="popup-salaries">
                    {chantierTarget[0].salarie.map((item)=>{
                      return <div>{item.contact.prenom+' '+item.contact.nom}</div>
                    })}
                  </div>
                  <div className="popup-taches">
                    {taches.map((item)=>{
                        return <div>
                          <p>{item.tache.nom+' ( '+item.quantite+' '+item.tache.unite.nom+' ) '}</p>
                          {item.tacheAchat.map((subitem)=>{
                            return <p>{subitem.achat.nom+' ( '+subitem.coefficient*item.quantite+' '+subitem.unite.nom+' ) '}</p>
                          })}
                        </div>
                    })}  
                  </div>   
                </div>    
                <ReturnButton onClick={toggleVisible} />      
              </div>
          </div>
      }
    </>
  )
}

export default PlanningPopup