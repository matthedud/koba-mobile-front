import { createContext, useState } from 'react';
 
const FormContext = createContext();

const FormProviderWrapper =(props) => {
  const [form, setForm] = useState({})

  const onChange = event =>{
    const {value, name} = event.target
    setForm({...form, [name]:value})
  }

  const resetForm = () => setForm({})

    return (
      <FormContext.Provider value={{form, setForm, onChange, resetForm}}>
          {props.children}
      </FormContext.Provider>
    )
  }
 
export { FormContext, FormProviderWrapper  };