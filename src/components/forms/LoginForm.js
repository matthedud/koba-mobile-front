import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import './LoginForm.css'
import TextInput from '../inputs/TextInput'
import PasswordInput from '../inputs/PasswordInput'
import ButtonComp from '../buttons/ButtonComp'

function LoginForm(props) {
  const { storeToken, authenticateUser, API_URL} = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    // Create an object representing the request body
    const requestBody = { username, password }

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT RETURNED', response.data)
        
        storeToken(response.data.authToken)
        authenticateUser()

        //navigate('/')
      })
      .catch((error) => {
        console.log(error)
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Username:</label>
        <TextInput
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label>Password:</label>
        <PasswordInput
          value={password}
          onChange={handlePassword}
        />

        <ButtonComp type="submit">Login</ButtonComp>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default LoginForm