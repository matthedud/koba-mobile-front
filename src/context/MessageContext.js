import { message } from "antd"
import { createContext } from "react"

const MessageContext = createContext()

const MessageProviderWrapper = (props) => {
  function errorMessage(content) {
    message.error(content)
  }

  return <MessageContext.Provider value={errorMessage}>{props.children}</MessageContext.Provider>
}

export { MessageContext, MessageProviderWrapper }
