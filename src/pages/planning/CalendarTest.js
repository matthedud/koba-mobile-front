import React from 'react'
import './CalendarTest.css'
import { startOfWeek, add } from 'date-fns'
import axios from 'axios'

const addTimeToDate = (date, hoursAdded, dayLength) => {
    let days = Math.ceil(hoursAdded/dayLength)
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

const CalendarTest = () => {
    // const dureeJour = 8
    // const endDate = addTimeToDate(date, 80, dureeJour)
    // const listeChantiers = [
    //     { title: 'event 1', start: date , end: endDate},
    //     { title: 'event X', date: '2022-04-05' }
    // ]

    const options = { weekday: 'long', month: 'numeric', day: 'numeric' };
    const date = new Date()
    const startWeek = startOfWeek(date, {weekStartsOn: 1});
    const semaine = [startWeek]

    for(let i =1 ; i<5; i++){
        semaine.push( add(semaine[i-1], {days: 1}) )
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <table className="table-planning">
            <tbody>
            {semaine.map((jour) => {
                return (
                <tr>
                    <td>{capitalizeFirstLetter(jour.toLocaleDateString('fr-FR', options))}</td>
                    <td className="td-flex">
                        <div class="chantier">Chantier de Tristaaaan</div>
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
                        </div>
                    </td>
                </tr>
                 );
            })}  
            </tbody>
        </table>
    )
}

export default CalendarTest
