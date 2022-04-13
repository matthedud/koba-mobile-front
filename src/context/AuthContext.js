import { createContext } from 'react';
 
const AuthContext = createContext();

const AuthProviderWrapper =(props) => {

    return (
      <AuthContext.Provider value={"dark"}>
          {props.children}
      </AuthContext.Provider>
    )
  }
 
export { AuthContext, AuthProviderWrapper  };