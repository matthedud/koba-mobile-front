import React from 'react'
import './CalendarTest.css'
import axios from 'axios'
import { startOfWeek, endOfWeek, add } from 'date-fns'

// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import timeGridPlugin from '@fullcalendar/timegrid';

const addTimeToDate = (date, hoursAdded, dayLength) => {
    let days = Math.ceil(hoursAdded/dayLength)
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

const CalendarTest = () => {

    const date = new Date()
    let startWeek = startOfWeek(date, {weekStartsOn: 1});
    //let endWeek = endOfWeek(date, {weekStartsOn: 1});

    const options = { weekday: 'long', month: 'numeric', day: 'numeric' };
    console.log(startWeek.toLocaleDateString('fr-FR', options));

    const dureeJour = 8


    const endDate = addTimeToDate(date, 80, dureeJour)
    const listeChantiers = [
        { title: 'event 1', start: date , end: endDate},
        { title: 'event X', date: '2022-04-05' }
    ]

    const semaine = [startWeek]

    for(let i =1 ; i<5; i++){
        semaine.push( add(semaine[i-1], {days: 1}) )
    }
    

    console.log(semaine)



    return (
        <table>
            <tbody>
                <tr>
                    <td><div>Lundi</div><div>11/04</div></td>
                    <td>
                        <div class="flex">
                            <ul class="no-bullet">
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                            </ul>
                            <ul class="no-bullet">
                                <li>
                                    Arroser la pelouse
                                </li>
                                <li>
                                    Elaguer le sapin de Noël
                                </li>
                                <li>
                                    Planter des glands
                                </li>
                                <li>
                                    Demander une prime d'été
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><div>Mardi</div><div>12/04</div></td>
                    <td>
                        <div class="flex">
                            <ul class="no-bullet">
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                            </ul>
                            <ul class="no-bullet">
                                <li>
                                    Arroser la pelouse
                                </li>
                                <li>
                                    Elaguer le sapin de Noël
                                </li>
                                <li>
                                    Planter des glands
                                </li>
                                <li>
                                    Demander une prime d'été
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><div>Mercredi</div><div>13/04</div></td>
                    <td>
                        <div class="flex">
                            <ul class="no-bullet">
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                            </ul>
                            <ul class="no-bullet">
                                <li>
                                    Arroser la pelouse
                                </li>
                                <li>
                                    Elaguer le sapin de Noël
                                </li>
                                <li>
                                    Planter des glands
                                </li>
                                <li>
                                    Demander une prime d'été
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><div>Jeudi</div><div>14/04</div></td>
                    <td>
                        <div class="flex">
                            <ul class="no-bullet">
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                                <li>
                                    Jean Michel
                                </li>
                            </ul>
                            <ul class="no-bullet">
                                <li>
                                    Arroser la pelouse
                                </li>
                                <li>
                                    Elaguer le sapin de Noël
                                </li>
                                <li>
                                    Planter des glands
                                </li>
                                <li>
                                    Demander une prime d'été
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><div>Vendredi</div><div>15/04</div></td>
                    <td>
                        <div class="flex">
                            <ul class="no-bullet">
                                <li class="chantier">
                                    Chantier de Tristan
                                </li>
                                <li class="salarie">
                                    Jean Michel
                                </li>
                                <li class="salarie">
                                    Jean Michel
                                </li>
                                <li class="salarie">
                                    Jean Michel
                                </li>
                                <li class="salarie">
                                    Jean Michel
                                </li>
                            </ul>
                            <ul class="no-bullet">
                                <li class="task">
                                    Arroser la pelouse
                                </li>
                                <li>
                                    Elaguer le sapin de Noël
                                </li>
                                <li>
                                    Planter des glands
                                </li>
                                <li>
                                    Demander une prime d'été
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CalendarTest
