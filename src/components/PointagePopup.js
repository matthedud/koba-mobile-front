import React, { useEffect, useState, useContext } from "react"
import { message } from "antd"
import { LoadingContext } from "../context/LoadingContext"
import { AuthContext } from "../context/AuthContext"
import "./PointagePopup.css"
import ReturnButton from "../components/buttons/ReturnButton"


const PointagePopup = ({ visible, toggleVisible, pointageTarget }) => {
  const { setLoading } = useContext(LoadingContext)
  const { getRequest } = useContext(AuthContext)
  const [pointageData, setPointageData] = useState([])

  function stopPropagation(e) {
    e.stopPropagation()
  }

  useEffect(() => {
    const getPointageDetails = async () => {
      setLoading(true)
      try {
        if (pointageTarget !== undefined) {
          const pointageDataReq = await getRequest(`/pointage/${pointageTarget}`)
          setPointageData(pointageDataReq.data)
        }
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getPointageDetails()
  }, [pointageTarget])


  return (
    <>
      {visible && (
        <div className="plan-popup-fade" onClick={toggleVisible}>
          <div className="plan-popup-wrap" onClick={stopPropagation}>
            <div className="fixed-wrap">
              {!pointageData.taches?.length < 1 && (
                <h2 className="pointage-title">{pointageData.taches[0].chantier.nom}</h2>
              )}
              <div className="pointage-task-card">
                <p>
                  <b>Équipe :</b>
                </p>
                {!pointageData.salaries?.length < 1 &&
                  pointageData.salaries.map((item) => {
                    return (
                      <>
                        <p>{item}</p>
                      </>
                    )
                  })}
              </div>
              <div className="pointage-task-card">
                <p>
                  <b>Taches :</b>
                </p>
                {!pointageData.taches?.length < 1 &&
                  pointageData.taches.map((item) => {
                    return (
                      <>
                        <p>{item.tacheChantier.tache.nom}</p>
                      </>
                    )
                  })}
              </div>
            </div>
              <ReturnButton onClick={toggleVisible} />
          </div>
        </div>
      )}
    </>
  )
}

export default PointagePopup
