import { GeneralAppButton, AccountForm, AccountFormTextField, AccountFormDiv } from "../../GeneralStyles/GeneralStyles"
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { accountFormType } from "../../GeneralTypes/GeneralTypes";
import { handleLoginRequest } from "./Login.request";
import { loginProps, singleErrorType } from "./Login.types";
import Alert from '@mui/material/Alert';


const Login = (props: loginProps) => {
  const { onLoginSuccess } = props
  const [loginForm, setLoginForm] = useState<accountFormType>({
    user_name: '',
    password: '',
  })
  const [currentErrors, setCurrentErrors] = useState<singleErrorType>({ error: "" })

  const { password, user_name } = loginForm
  const userName = user_name

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target.name
    const value = event.target.value
    setLoginForm({ ...loginForm, [target]: value })
  }

  return (
    <AccountFormDiv>
      <h2>Login:</h2>
      <AccountForm onSubmit={event => handleLoginRequest(event, loginForm, onLoginSuccess, setCurrentErrors)}>
        <AccountFormTextField size="small" required name="user_name" label="User Name" variant="outlined" value={userName} type="text" onChange={handleInputChange} />
        {currentErrors.error == "Invalid username or password" && (<Alert severity="error">{currentErrors.error}</Alert>)}
        <AccountFormTextField size="small" required name="password" label="Password" variant="outlined" value={password} onChange={handleInputChange} />
        <GeneralAppButton variant="outlined" type="submit">Login</GeneralAppButton>
        <GeneralAppButton variant="outlined"> <Link to='/create-account'>Don't Have an Account? </Link> </GeneralAppButton>
      </AccountForm>
    </AccountFormDiv>
  )
}

export default Login