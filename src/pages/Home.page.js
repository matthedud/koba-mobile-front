import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HomeButton from "../components/buttons/HomeButton"
import './Home.css'

import { MdPhotoCamera } from 'react-icons/md';
import { IoIosConstruct } from 'react-icons/io';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { LoadingContext } from "../context/LoadingContext";
import { AuthContext } from '../context/AuthContext'
import LogoutButton from "../components/buttons/LogoutButton";


const Home = () => {
  const navigate = useNavigate()
  const {loading, setLoading} = useContext(LoadingContext)
  const { logOutUser } = useContext(AuthContext)

  const toggleLoading = () => setLoading(!loading)

  return (
    <>
      <div className="home-page">
        <HomeButton onClick={() => navigate("/pointage")} ><BiTimeFive/>{ 'Pointage' }<div/></HomeButton>
        <HomeButton onClick={() => navigate("/planning")} ><BsFillCalendarDateFill/>{"Planning"}<div/></HomeButton>
        <HomeButton onClick={() => navigate("/chantiers")} ><IoIosConstruct/>{"Chantiers"}<div/></HomeButton>
        <HomeButton onClick={() => navigate("/photo")} ><MdPhotoCamera/>{"Photos"}<div/></HomeButton>
        <LogoutButton onClick={() => {
          setLoading(true)
          logOutUser()
          setLoading(false)
        }} ><FiLogOut/>{"Déconnexion"}<div/></LogoutButton>
      </div>
    </>
  )
}

export default Home
