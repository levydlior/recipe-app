import { useState } from "react";
import { Routes, Route } from "react-router";
import { userType } from "../../GeneralTypes/GeneralTypes";
import { CreateAnAccount } from "../CreateAnAccount/CreateAnAccount";
import { MainContent } from "../MainContent/MainContent";


export const Layout = () => {
  const [loggedUser, setLoggedUser] = useState<userType | undefined>(undefined);
  const [authorized, setAuthorized] = useState<boolean>(false);




  // if (!authorized) {
  //   return <div>false auth</div>;
  // }

  const handleAccountCreateOrLog = (user: userType) => {
    setLoggedUser(user)
    setAuthorized(true)
  }


  return (
    <div>
      {!loggedUser ?
        <Routes>
          <Route path="/" element={<CreateAnAccount onCreateAnAccount={handleAccountCreateOrLog} />} />
          <Route path="/create-account" element={<CreateAnAccount onCreateAnAccount={handleAccountCreateOrLog} />} />
        </Routes>
        :
        <Routes>
          <Route path="/"
            element={<MainContent />}
          />
        </Routes>
      }
    </div>
  )
}

export default Layout