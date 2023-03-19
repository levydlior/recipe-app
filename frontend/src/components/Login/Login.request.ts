import {
  accountFormType,
  errorsTypes,
  userType,
} from "../../GeneralTypes/GeneralTypes";

export const handleLoginRequest = (
  event: React.FormEvent<HTMLFormElement>,
  loginForm: accountFormType,
  handleLoginSuccess: (user: userType) => void,
  setCurrentErrors: React.Dispatch<React.SetStateAction<errorsTypes>>
) => {
  event.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify(loginForm),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user: userType) => {
        handleLoginSuccess(user);
        setCurrentErrors({ errors: [] });
      });
    } else {
      r.json().then((newError) => {
        setCurrentErrors(newError);
      });
    }
  });
};
