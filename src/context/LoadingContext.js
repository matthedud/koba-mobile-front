import { createContext, useState } from 'react';
 
const LoadingContext = createContext();

const LoadingProviderWrapper =(props) => {
  const [loading, setLoading] = useState(false)

    return (
      <LoadingContext.Provider value={{loading, setLoading}}>
          {props.children}
      </LoadingContext.Provider>
    )
  }
 
export { LoadingContext, LoadingProviderWrapper  };