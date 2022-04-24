import moment from "moment"
import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { LoadingContext } from "../context/LoadingContext"
import DeleteButton from "./buttons/DeleteButton"
import Card from "./Card"
import { dateViewFormat } from "./Format/DateFormat"
import "./PhotoContainer.css"

const PhotoContainer = (props) => {
  const { deleteRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)

  const deleteHandler = async () => {
    setLoading(true)
    try {
      await deleteRequest("/photos-chantier/" + props._id)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

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
          <p>{props.commentaire || null}</p>
          <DeleteButton onClick={deleteHandler} />
        </div>
      </div>
    </Card>
  )
}

export default PhotoContainer
