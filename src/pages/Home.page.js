import React from "react"
import { useNavigate } from "react-router-dom"
import HomeButton from "../components/HomeButton"
import './Home.css'

import { MdPhotoCamera } from 'react-icons/md';
import { IoIosConstruct } from 'react-icons/io';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="home-page">
        <HomeButton onClick={() => navigate("/pointage-chantier")} ><BiTimeFive/>{ 'Pointage' }<div/></HomeButton>
        <HomeButton onClick={() => navigate("/planning")} ><BsFillCalendarDateFill/>{"Planning"}<div/></HomeButton>
        <HomeButton onClick={() => navigate("/chantiers")} ><IoIosConstruct/>{"Chantiers"}<div/></HomeButton>
        <HomeButton onClick={() => navigate("/photo")} ><MdPhotoCamera/>{"Photos"}<div/></HomeButton>
        <HomeButton onClick={() => {}} ><FiLogOut/>{"Logout"}<div/></HomeButton>
      </div>
    </>
  )
}

export default Home
