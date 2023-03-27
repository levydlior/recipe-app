import { Link } from "react-router-dom"
import { HeaderDiv, LogOutLink } from "./Header.styles"
import { headerProps } from "./Header.types"

const Header = (headerProps: headerProps) => {
    const { handleLogOut, loggedUser } = headerProps

    const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        handleLogOut()
    }

    return (
        <HeaderDiv>
            Header
            {loggedUser && (<LogOutLink to="/" onClick={handleLogOutClick}>Logout</LogOutLink>)}
        </HeaderDiv>
    )
}

export default Header