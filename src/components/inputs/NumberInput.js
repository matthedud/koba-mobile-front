import React from "react"
import { InputNumber } from "antd"
import  "./NumberInput.css"
import "./InputComp.css"


const NumberInput = props => {

  const changeHandler =  (value) =>{
    console.log({value});
    props.onChange({value, name:props.name})
  }
  return (
    <InputNumber
      {...props}
      className={`number-input ${props.value?'':"invalide"}`}
      type="number"
      onchange={changeHandler}
    />
  )
}

export default NumberInput
