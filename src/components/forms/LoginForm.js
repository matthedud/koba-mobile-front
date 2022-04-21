import { useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import "./LoginForm.css"
import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"
import ButtonComp from "../buttons/ButtonComp"
import { LoadingContext } from "../../context/LoadingContext"


function LoginForm(props) {
  const { storeToken, authenticateUser, API_URL } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined)

  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const requestBody = { username, password }
    setLoading(true)
    try {
      const response = await axios.post(`${API_URL}/auth/login`, requestBody)
      if (response.data) {
        storeToken(response.data.authToken)
        authenticateUser()
      }
    } catch (error) {
      const errorDescription = error?.response?.data?.message || ""
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
            value={username}
            onChange={handleUsername}
            placeHolder={"Identifiant"}
          />
        </label>

        <label>
          Mot de Passe:
          <PasswordInput value={password} onChange={handlePassword} zeroOK />
        </label>

        <ButtonComp type="submit">Connexion</ButtonComp>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default LoginForm
