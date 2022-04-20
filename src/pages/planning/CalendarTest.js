import React, { useContext, useEffect, useState } from "react"
import './CalendarTest.css'
import { startOfWeek, add, compareAsc, parseISO } from 'date-fns'
import { AuthContext } from "../../context/AuthContext"
import { LoadingContext } from "../../context/LoadingContext"
import { message } from "antd"
import PlanningCard from "../../components/PlanningCard"
import moment from 'moment'
import {dateSaveFormat} from '../../components/Format/DateFormat'
import PlanningPopup from "../../components/PlanningPopup"

const CalendarTest = () => {
    // const dureeJour = 8
    // const endDate = addTimeToDate(date, 80, dureeJour)

    const { getRequest, user } = useContext(AuthContext)
    const { setLoading } = useContext(LoadingContext)
    const [chantiersData, setchantiersData] = useState([])
    const [chantierTarget, setchantierTarget] = useState([])
    const [visible, setVisible] = useState(false)
    
    const options = { weekday: 'long', month: 'numeric', day: 'numeric' };
    const date = new Date()
    const startWeek = startOfWeek(date, {weekStartsOn: 1});
    const semaine = [startWeek]
    const formatedDate = moment(startWeek).format(dateSaveFormat)

    for(let i =1 ; i<5; i++){
        semaine.push( add(semaine[i-1], {days: 1}) )
    }

    useEffect(() => {
        const getChantiers = async () => {
        setLoading(true)
        try {
            const chantiersDataReq = await getRequest(`/planning-salarie/${formatedDate}`)
            if (chantiersDataReq?.data){
                let tachesDataReq
                for(let i=0;i<chantiersDataReq.data.planning.length;i++){
                    tachesDataReq = await getRequest(`/tachesPrevu/${chantiersDataReq.data.planning[i].chantierID._id}/${moment(chantiersDataReq.data.planning[i].start).format(dateSaveFormat)}`)
                    if (tachesDataReq?.data){
                        const tempData = [...chantiersDataReq.data.planning]
                        tempData[i].nbTaches = tachesDataReq.data.length
                        setchantiersData(tempData)
                        console.log(tempData)
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
    }, [])  

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function toggleVisible(){
        setVisible(!visible)
    }

    return (
        <>
        <PlanningPopup chantierTarget={chantierTarget} visible={visible} toggleVisible={toggleVisible}/>
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
                                return <PlanningCard jour={jour} setchantierTarget={setchantierTarget} toggleVisible={toggleVisible} chantierID={item.chantierID._id} nom={item.chantierID.nom} personnes={1} taches={item.nbTaches}/>
                            }
                        })}
                        {/* <div className="chantier">Chantier de Tristaaaan</div>
                        <div className="flex">
                            <ul className="no-bullet">
                                <li className="salarie">
                                    Jean Michel
                                </li>
                                <li className="salarie">
                                    Jean Michel
                                </li>
                                <li className="salarie">
                                    Jean Michel
                                </li>
                                <li className="salarie">
                                    Jean Michel
                                </li>
                            </ul>
                            <ul className="no-bullet">
                                <li className="task">
                                    Arroser la pelouse
                                </li>
                                <li className="task">
                                    Elaguer le sapin de Noël
                                </li>
                                <li className="task">
                                    Planter des glands
                                </li>
                                <li className="task">
                                    Demander une prime d'été
                                </li>
                            </ul>
                        </div> */}
                    </td>
                </tr>
                 );
            })}  
            </tbody>
        </table>
        </>
    )
}

export default CalendarTest
