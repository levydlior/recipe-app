import { FormEvent } from "react";
import {
  accountFormType,
  errorsTypes,
  userType,
} from "../../GeneralTypes/GeneralTypes";

export const HandleCreateAnAccountRequest = (
  event: FormEvent<HTMLFormElement>,
  createAccountForm: accountFormType,
  onCreateAnAccount: (user: userType) => void,
  setCurrentErrors: React.Dispatch<React.SetStateAction<errorsTypes>>,
  setCreateAccountForm: React.Dispatch<React.SetStateAction<accountFormType>>
) => {
  event.preventDefault();

  fetch("/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(createAccountForm),
  }).then((response) => {
    if (response.ok) {
      response.json().then((user: userType) => {
        onCreateAnAccount(user);
        setCurrentErrors({ errors: [] });
        setCreateAccountForm({
          user_name: "",
          password: "",
        });
      });
    } else {
      response.json().then((errors) => setCurrentErrors(errors));
    }
  });
};
