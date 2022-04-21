import { useState, useEffect, createContext } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:5005/api"
    : "https://koba-mobile-back.herokuapp.com/api"

// process.env.REACT_APP_API_URL

const AuthContext = createContext()

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  const location = useLocation()

  useEffect(() => {
    authenticateUser()
  }, [location])

  const storeToken = (token) => {
    localStorage.setItem("authToken", token)
  }
  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken")
  }

  const getRequest = (url) => {
    const storedToken = localStorage.getItem("authToken")
    if (storedToken) {
      return axios.get(`${API_URL}${url}`, {
        headers: { authorization: `Bearer ${storedToken}` },
      })
    }
  }
  const postRequest = (url, data) => {
    const storedToken = localStorage.getItem("authToken")
    console.log({storedToken, url, data});
    if (storedToken) {
      return axios.post(`${API_URL}${url}`, data ,{
        headers: { authorization: `Bearer ${storedToken}` },
      })
    }
  }
  const authenticateUser = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken")

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // If the server verifies that JWT is valid
          const user = response.data
          // Update state variables
          setIsLoggedIn(true)
          setIsLoading(false)
          setUser(user)
        })
        .catch((error) => {
          // If the server sends an error response (invalid token)
          // Update state variables
          setIsLoggedIn(false)
          setIsLoading(false)
          setUser(null)
        })
    } else {
      // If the token is not available (or is removed)
      setIsLoggedIn(false)
      setIsLoading(false)
      setUser(null)
    }
  }

  const logOutUser = () => {
    // To log out the user, remove the token
    removeToken()

    // and update the state variables
    authenticateUser()
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        getRequest,
        postRequest,
        API_URL,
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext }
