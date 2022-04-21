import React from "react"
import Card from "./Card"
import './PhotoContainer.css'

const PhotoContainer = (props) => {
  return (
    <Card>
    <div className="photo-container">
    <a href={props.imageUrl}>
      <picture className="photo-chantier">
        <img src={props.imageUrl} alt="chantier" />
      </picture>
      </a>
      <div className="photo-info">
          <p>{props.date}</p>
          <p>{props.commentaire||null}</p>
      </div>
      </div>
    </Card>
  )
}

export default PhotoContainer
