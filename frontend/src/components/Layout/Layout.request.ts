import { SetStateAction } from "react";
import { userType } from "../../GeneralTypes/GeneralTypes";

export const fetchLoggedUser = (
  setAuthorized: {
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  },
  setLoggedUser: {
    (value: SetStateAction<userType | undefined>): void;
  }
) => {
  fetch("/users/show").then((r) => {
    if (r.ok) {
      r.json().then((user: userType) => {
        setAuthorized(true);
        setLoggedUser(user);
      });
    } else {
      setAuthorized(true);
    }
  });
};

export const handleLogOut = (
  setAuthorized: {
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  },
  setLoggedUser: {
    (value: SetStateAction<userType | undefined>): void;
  }
) => {
  fetch("/logout", {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      setLoggedUser(undefined);
      setAuthorized(true);
    }
  });
};
