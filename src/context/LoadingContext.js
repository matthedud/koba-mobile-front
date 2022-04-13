import { createContext } from 'react';
 
const LoadingContext = createContext();

const LoadingProviderWrapper =(props) => {

    return (
      <LoadingContext.Provider value={"dark"}>
          {props.children}
      </LoadingContext.Provider>
    )
  }
 
export { LoadingContext, LoadingProviderWrapper  };