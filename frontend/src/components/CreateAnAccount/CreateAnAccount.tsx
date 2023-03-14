import { CreateAnAccountFormDiv, AccountFormTextField, AccountForm } from "./CreateAnAccount.styles"
import { ChangeEvent, useState } from "react";
import { accountFormType, userType, errorsTypes } from "../../GeneralTypes/GeneralTypes";
import { GeneralAppButton } from './../../GeneralStyles/GeneralStyles'
import { HandleCreateAnAccountRequest } from "./CreateAnAccount.request";
import { CreateAccountFormProps } from "./CreateAnAccount.types";

export const CreateAnAccount = (props: CreateAccountFormProps) => {
    const { onCreateAnAccount } = props
    const [createAccountForm, setCreateAccountForm] = useState<accountFormType>({
        user_name: '',
        password: '',
    });
    const [currentErrors, setCurrentErrors] = useState<errorsTypes>({ errors: [] })


    const { password, user_name } = createAccountForm
    const userName = user_name

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target.name
        const value = event.target.value
        setCreateAccountForm({ ...createAccountForm, [target]: value })
    }

    return (
        <CreateAnAccountFormDiv>
            <h2>
                Create An Account:
            </h2>
            <AccountForm onSubmit={event => HandleCreateAnAccountRequest(event, createAccountForm,
                onCreateAnAccount,
                setCurrentErrors, setCreateAccountForm)}>
                <AccountFormTextField size="small" required name="user_name" label="User Name" variant="outlined" value={userName} type="text" onChange={handleInputChange} />
                {currentErrors.errors.length > 0 && (<p>{currentErrors.errors}</p>)}
                <AccountFormTextField size="small" required name="password" label="Password" variant="outlined" value={password} onChange={handleInputChange} />
                <GeneralAppButton variant="outlined" type="submit">Create An Account</GeneralAppButton>
                <GeneralAppButton variant="outlined">Already Have an Account?</GeneralAppButton>
            </AccountForm>
        </CreateAnAccountFormDiv >
    )
}

export default CreateAnAccount