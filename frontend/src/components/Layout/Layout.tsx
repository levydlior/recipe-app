import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router";
import { userType } from "../../GeneralTypes/GeneralTypes";
import { CreateAnAccount } from "../CreateAnAccount/CreateAnAccount";
import Login from "../Login/Login";
import { MainContent } from "../MainContent/MainContent";
import { fetchLoggedUser, handleLogOut } from "./Layout.request";


export const Layout = () => {
  const [loggedUser, setLoggedUser] = useState<userType | undefined>(undefined);
  const [authorized, setAuthorized] = useState<boolean>(false);

  useEffect(() => { fetchLoggedUser(setAuthorized, setLoggedUser) },
    [])

  const navigate = useNavigate()

  const handleAccountCreateOrLog = (user: userType) => {
    setLoggedUser(user)
    setAuthorized(true)
    navigate("/")
  }


  if (!authorized) {
    return <div></div>;
  }

  return (
    <div>
      {!loggedUser ?
        <Routes>
          <Route path="/" element={<CreateAnAccount onCreateAnAccount={handleAccountCreateOrLog} />} />
          <Route path="/create-account" element={<CreateAnAccount onCreateAnAccount={handleAccountCreateOrLog} />} />
          <Route path="/login" element={<Login onLoginSuccess={handleAccountCreateOrLog} />} />
        </Routes>
        :
        <Routes>
          <Route path="/"
            element={<MainContent handleLogOut={() => handleLogOut(setAuthorized, setLoggedUser)} />}
          />
        </Routes>
      }
    </div>
  )
}

export default Layout