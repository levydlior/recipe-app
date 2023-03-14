import { userType } from "../../GeneralTypes/GeneralTypes";

export type CreateAccountFormProps = {
  onCreateAnAccount: (user: userType) => void;
};
