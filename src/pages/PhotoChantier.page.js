import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PhotoContainer from "../components/PhotoContainer"
import { AuthContext } from "../context/AuthContext"

const PhotoChantier = () => {
  const { chantierID } = useParams()
  const [photos, setPhotos] = useState([])
  const [chantier, setChantier] = useState({})
  const { getRequest } = useContext(AuthContext)

  useEffect(() => {
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
  }, [])

  return <div>
  <h1>Photo: {chantier?.nom}</h1>
    {photos.map(photo=><PhotoContainer {...photo}/>)}
  </div>
}

export default PhotoChantier
