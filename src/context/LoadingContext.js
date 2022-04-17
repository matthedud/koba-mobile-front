import { createContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const LoadingContext = createContext()

const LoadingProviderWrapper = (props) => {
  const [loading, setLoading] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setLoading(false)
    console.log("handle route change here", location)
  }, [location])

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export { LoadingContext, LoadingProviderWrapper }
