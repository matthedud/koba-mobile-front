import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { AuthProviderWrapper } from "./context/AuthContext"
import { LoadingProviderWrapper } from "./context/LoadingContext"
import { FormProviderWrapper } from "./context/FormContext"
import { MessageProviderWrapper } from "./context/MessageContext"

ReactDOM.render(
  <BrowserRouter>
    <LoadingProviderWrapper>
      <FormProviderWrapper>
        <AuthProviderWrapper>
          <MessageProviderWrapper>
            <App />
          </MessageProviderWrapper>
        </AuthProviderWrapper>
      </FormProviderWrapper>
    </LoadingProviderWrapper>
  </BrowserRouter>,
  document.getElementById("root")
)

reportWebVitals()


serviceWorkerRegistration.register();