import React from "react"
import ButtonComp from "./ButtonComp"
import { IoIosArrowBack } from "react-icons/io"

const ReturnButton = (props) => {
  const { addClass } = props
  return (
    <ButtonComp
      className={addClass ? "return-button " + addClass : "return-button"}
      onClick={props.onClick}
    >
      <IoIosArrowBack />
      Retour
      <div />
    </ButtonComp>
  )
}

export default ReturnButton
