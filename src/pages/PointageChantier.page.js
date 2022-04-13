import React from 'react'
import SubmitButton from '../components/buttons/SubmitButton'
import ChantierMoForm from '../components/ChantierMoForm'
import FormLayout from '../components/FormLayout'

const PointageChantier = () => {

  const handleSubmit= ()=>{
    
  }

  return (
    <FormLayout>
      <ChantierMoForm />
      <SubmitButton onClick={handleSubmit}/>
    </FormLayout>
  )
}

export default PointageChantier