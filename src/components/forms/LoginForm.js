import { useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import "./LoginForm.css"
import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"
import ButtonComp from "../buttons/ButtonComp"
import { LoadingContext } from "../../context/LoadingContext"
import { FormContext } from "../../context/FormContext"

function LoginForm(props) {
  const { storeToken, authenticateUser, API_URL } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const { form, onChange, setForm } = useContext(FormContext)
  const [errorMessage, setErrorMessage] = useState(undefined)


  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const requestBody = { username:form.username, password:form.password }
    setLoading(true)
    try {
      const response = await axios.post(`${API_URL}/auth/login`, requestBody)
      if (response.data) {
        storeToken(response.data.authToken)
        authenticateUser()
        setForm({})
      }
    } catch (error) {
      const errorDescription = error?.response?.data?.message || ""
      onChange({value:true, name:'invalide'})
      setErrorMessage(errorDescription)
    }
    setLoading(false)
  }

  return (
    <div className="LoginPage">
      <form onSubmit={handleLoginSubmit}>
        <label>
          Identifiant:
          <TextInput
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder={"Identifiant"}
            invalide={form.invalide}
          />
        </label>

        <label>
          Mot de Passe:
          <PasswordInput value={form.password} onChange={onChange} invalide={form.invalide} />
        </label>

        <ButtonComp type="submit">Connexion</ButtonComp>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default LoginForm
