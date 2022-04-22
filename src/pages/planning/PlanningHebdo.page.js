import React, { useContext, useEffect, useState } from "react"
import './PlanningHebdo.page.css'
import { startOfWeek, add, compareAsc, parseISO, getWeek } from 'date-fns'
import { AuthContext } from "../../context/AuthContext"
import { LoadingContext } from "../../context/LoadingContext"
import { message } from "antd"
import PlanningCard from "../../components/PlanningCard"
import moment from 'moment'
import {dateSaveFormat} from '../../components/Format/DateFormat'
import PlanningPopup from "../../components/PlanningPopup"
import ReturnButton from "../../components/buttons/ReturnButton"
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs"
import {useNavigate} from 'react-router-dom'

const PlanningHebdo = () => {
    // const dureeJour = 8
    // const endDate = addTimeToDate(date, 80, dureeJour)

    const { getRequest, user } = useContext(AuthContext)
    const { setLoading } = useContext(LoadingContext)
    const [chantiersData, setchantiersData] = useState([])
    const [chantierTarget, setchantierTarget] = useState([])
    const [visible, setVisible] = useState(false)
    const [startWeek, setStartWeek] = useState(startOfWeek(new Date(), {weekStartsOn: 1}))
    const [semaine, setSemaine] = useState([])
    const options = { weekday: 'long', month: 'numeric', day: 'numeric' }
    const navigate = useNavigate()


    useEffect(() => {
        const getChantiers = async () => {
        console.log('semaine : ',getWeek(startWeek, {
            weekStartsOn: 1,
        }))
        setLoading(true)
        setSemaine([])
        const newSemaine = []
        newSemaine.push(startWeek)
        for(let i =1 ; i<5; i++){
            newSemaine.push( add(newSemaine[i-1], {days: 1}) )
        }
        setSemaine(newSemaine)
        try {
            const formatedDate = moment(startWeek).format(dateSaveFormat)
            const chantiersDataReq = await getRequest(`/planning-salarie/${formatedDate}`)
            if (chantiersDataReq?.data){
                let tachesDataReq
                for(let i=0;i<chantiersDataReq.data.length;i++){
                    tachesDataReq = await getRequest(`/tachesPrevu/${chantiersDataReq.data[i].chantierID._id}/${moment(chantiersDataReq.data[i].start).format(dateSaveFormat)}`)
                    if (tachesDataReq?.data){
                        const tempData = [...chantiersDataReq.data]
                        tempData[i].nbTaches = tachesDataReq.data.length
                        tempData[i].nbSalaries = tempData[i].salarieID.length
                        setchantiersData(tempData)
                    }
                }
            }
        } catch (err) {
            message.error("erreur de connexion")
            console.log({ err })
        }
        setLoading(false)
        }
        getChantiers()
    }, [startWeek])  

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function toggleVisible(){
        setVisible(!visible)
    }

    function nextWeek(){
        setStartWeek(add(startWeek, {days: 7}))
    }

    function previousWeek(){
        setStartWeek(add(startWeek, {days: -7}))
    }

    const handleReturn= ()=>{
      navigate('/')
    }

    return (
        <>
        <PlanningPopup chantierTarget={chantierTarget} visible={visible} toggleVisible={toggleVisible}/>
        <div className="week-flex">
         <BsArrowLeftCircle onClick={previousWeek} className="week-arrow"/><h2 className="week-number">Semaine {getWeek(startWeek, {weekStartsOn: 1})}</h2><BsArrowRightCircle onClick={nextWeek} className="week-arrow"/>
        </div>
        <table className="table-planning">
            <tbody>
            {semaine.map((jour) => {
                return (
                <tr>
                    <td>{capitalizeFirstLetter(jour.toLocaleDateString('fr-FR', options))}</td>
                    <td className="td-flex">
                        {chantiersData.map((item)=>{
                            const itemFormat = new Date(parseISO(item.start).toDateString())
                            if(compareAsc(jour, itemFormat) === 0 ){
                                return <PlanningCard chantier={item} jour={jour} setchantierTarget={setchantierTarget} toggleVisible={toggleVisible} nom={item.chantierID.nom} personnes={item.nbSalaries} taches={item.nbTaches}/>
                            }
                        })}
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        <div className="dummy"></div>
        <ReturnButton addClass="planning-return" onClick={handleReturn}/>
        </>
    )
}

export default PlanningHebdo

