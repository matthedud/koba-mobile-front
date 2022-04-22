import moment from "moment"
import React from "react"
import Card from "./Card"
import { dateViewFormat } from "./Format/DateFormat"
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
          <p>{moment(props.date).format(dateViewFormat)}</p>
          <p>{props.commentaire||null}</p>
      </div>
      </div>
    </Card>
  )
}

export default PhotoContainer
