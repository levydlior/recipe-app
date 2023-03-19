import {
  accountFormType,
  errorsTypes,
  userType,
} from "../../GeneralTypes/GeneralTypes";
import { singleErrorType } from "./Login.types";

export const handleLoginRequest = (
  event: React.FormEvent<HTMLFormElement>,
  loginForm: accountFormType,
  onLoginSuccess: (user: userType) => void,
  setCurrentErrors: React.Dispatch<React.SetStateAction<singleErrorType>>
) => {
  event.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(loginForm),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user: userType) => {
        onLoginSuccess(user);
        setCurrentErrors({ error: "" });
      });
    } else {
      r.json().then((newError) => {
        setCurrentErrors(newError);
      });
    }
  });
};
