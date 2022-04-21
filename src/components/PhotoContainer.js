import React from "react"
import './PhotoContainer.css'

const PhotoContainer = (props) => {
  return (
    <div>
      <picture className="photo-chantier">
        <img src={props.imageUrl} alt="chantier" />
      </picture>
    </div>
  )
}

export default PhotoContainer
