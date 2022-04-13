import React, { useState } from "react"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { ButtonValidateComp } from "../UI/Buttons"
import {Button, Input} from 'antd'
  
import { SyncOutlined } from "@ant-design/icons"

const LoginForm = (props) => {
    const [form, setForm] = useState({
        username:null,
        password:null
    })

    const onChange = (event)=>{
        const {value, name} = event.target
        setForm({...form, [name]:value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
    //   loading = true
    //   axios
    //   loading = false
      
    }
  
    return (
      <>
        <div>
          <label>Utilisateur</label>
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChange}
          />
          <br />
          <br />
          <label>Mot de Passe</label>
          <Input
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <Button style={{ marginRight: "10px" }} submit={handleSubmit}>
            Login
          </Button>
          <br />
          {loading ? <SyncOutlined spin /> : null}
        </div>
      </>
    )
  }
  
  
  export default (LoginForm)
  