import { GeneralAppButton } from "../../GeneralStyles/GeneralStyles"
import { AccountForm, AccountFormTextField, CreateAnAccountFormDiv } from "../CreateAnAccount/CreateAnAccount.styles"
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { accountFormType, errorsTypes } from "../../GeneralTypes/GeneralTypes";


const Login = () => {

  const [loginForm, setLoginForm] = useState<accountFormType>({
    user_name: '',
    password: '',
  })
  const [currentErrors, setCurrentErrors] = useState<errorsTypes>({ errors: [] })

  const { password, user_name } = loginForm
  const userName = user_name

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target.name
    const value = event.target.value
    setLoginForm({ ...loginForm, [target]: value })
  }


  return (
    <CreateAnAccountFormDiv>
      <h2>Login:</h2>
      <AccountForm>
        <AccountFormTextField size="small" required name="user_name" label="User Name" variant="outlined" value={userName} type="text" onChange={handleInputChange} />
        {/* {currentErrors.errors.length > 0 && (<p>{currentErrors.errors}</p>)} */}
        <AccountFormTextField size="small" required name="password" label="Password" variant="outlined" value={password} onChange={handleInputChange} />
        <GeneralAppButton variant="outlined" type="submit">Create An Account</GeneralAppButton>
        <GeneralAppButton variant="outlined"> <Link to='/create-account'>Already Have an Account? </Link> </GeneralAppButton>
      </AccountForm>
    </CreateAnAccountFormDiv>
  )
}

export default Login