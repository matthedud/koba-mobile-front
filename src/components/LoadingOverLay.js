import React, { useContext } from "react"
import { LoadingContext } from "../context/LoadingContext"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import "./LoadingOverLay.css"

const LoadingOverLay = () => {
  const { loading } = useContext(LoadingContext)
  console.log(loading)
  return (
    <div className={`loading-overlay ${loading ? "open" : ""}`}>
      <AiOutlineLoading3Quarters className="loading-icon" />
    </div>
  )
}

export default LoadingOverLay
