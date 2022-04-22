import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ButtonFoorterGroupe from "../components/buttons/ButtonFoorterGroupe"
import ReturnButton from "../components/buttons/ReturnButton"
import PhotoContainer from "../components/PhotoContainer"
import { AuthContext } from "../context/AuthContext"
import { LoadingContext } from "../context/LoadingContext"

const PhotoChantier = () => {
  const { chantierID } = useParams()
  const [photos, setPhotos] = useState([])
  const [chantier, setChantier] = useState({})
  const { getRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    const getPictures = async () => {
      try {
        const PhotoData = await getRequest("/photos-chantier/" + chantierID)
        if (PhotoData.data) setPhotos(PhotoData.data)
        const chantierData = await getRequest("/chantiers/" + chantierID)
        if (chantierData.data) setChantier(chantierData.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPictures()
    setLoading(false)
  }, [])

  return (
    <>
      <h1>{chantier?.nom}</h1>
      {photos.length < 1
        ? "Aucune Photo"
        : photos.map((photo) => <PhotoContainer key={photo._id} {...photo} />)}
      <div style={{ marginBottom: "5rem" }}></div>
      <ButtonFoorterGroupe>
        <ReturnButton onClick={() => navigate("/chantiers")} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PhotoChantier
