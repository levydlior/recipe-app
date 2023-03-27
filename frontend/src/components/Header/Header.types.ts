import {userType} from './../../GeneralTypes/GeneralTypes'

export interface headerProps {
  handleLogOut: () => void;
  loggedUser: userType | undefined
}
