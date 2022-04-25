import moment from "moment"
import React, { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { LoadingContext } from "../context/LoadingContext"
import ButtonComp from "./buttons/ButtonComp"
import DeleteButton from "./buttons/DeleteButton"
import Card from "./Card"
import { dateViewFormat } from "./Format/DateFormat"
import TextAreaInput from "./inputs/TextAreaInput"
import "./PhotoContainer.css"

const PhotoContainer = (props) => {
  const { deleteRequest, postRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const [showEdit, setShowEdit] = useState(false)
  const [changedValue, setChangedValue] = useState({ commentaire: props.commentaire })

  const toggleEdit = () => setShowEdit(!showEdit)

  const deleteHandler = async () => {
    setLoading(true)
    try {
      await deleteRequest("/photos-chantier/" + props._id)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const onChange = (event) => {
    const { value, name } = event.target || event
    setChangedValue({ ...changedValue, [name]: value })
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      await postRequest("/edit-photo/" + props._id, changedValue)
      toggleEdit()
    } catch (error) {
      console.log(error)
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
          {showEdit ? (
            <TextAreaInput value={changedValue.commentaire} onChange={onChange} name="commentaire" />
          ) : (
            <p>{props.commentaire || null}</p>
          )}
          <DeleteButton onClick={deleteHandler} />
          {showEdit ? (
            <ButtonComp onClick={handleSave}>sauvegarder</ButtonComp>
          ) : (
            <ButtonComp onClick={toggleEdit}>modifier</ButtonComp>
          )}
        </div>
      </div>
    </Card>
  )
}

export default PhotoContainer
