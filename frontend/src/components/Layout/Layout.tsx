import { useState } from "react";
import { userType } from "../../GeneralTypes/GeneralTypes";

const Layout = () => {
 const [loggedUser, setLoggedUser] = useState<userType | undefined>(undefined);
 const [authorized, setAuthorized] = useState<boolean>(false);


 if (!authorized) {
    return <div></div>;
  }


    return (
        <div>
        {/* // {loggedUser
        //     ?app content goes here
        //     : create or login
        // } */}
        </div>
    )
}

export default Layout