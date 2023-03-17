import { MarginProps } from "@mui/system";

 type mainProps = {
  handleLogOut: () => void
}

export const MainContent = (props: mainProps) => {
const {handleLogOut} = props

  
  return (
    <div>
      
      <button onClick={() => handleLogOut()}>
        log out
      </button>
    </div>
  )
}

export default MainContent