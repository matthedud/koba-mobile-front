import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
