import { userType } from "../../GeneralTypes/GeneralTypes"

export type loginProps = {
    onLoginSuccess: (user: userType) => void 
}

export type singleErrorType = {
    error: string
  }