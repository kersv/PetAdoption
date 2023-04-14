import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavContainer, LogoContainer, Logo, NavLinksContainer, NavLink, FiMenuContainer, FiMenuIcon, FiXIcon, DropdownLinksContainer, LogOutButton} from "../Components/Styles/NavContainer.styles"
import { setUserLogOut } from "../Redux/user"
import { useDispatch, useSelector } from "react-redux"
import { signOutUser } from "../Firebase/firebase.utils"



const Navigation = () => {
  const dispatch = useDispatch()

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const {userEmail} = useSelector(state => state.user)

  const signOut = () => {
    signOutUser()
    dispatch(setUserLogOut())
  }
 

  return (
    <Fragment>
      <NavContainer>
        <LogoContainer>
          <Logo to='/'>AdoPet</Logo>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink padding='0.5em 1em' to='/'>Home</NavLink>
          <NavLink padding='0.5em 1em' to='/About'>About us</NavLink>
          <NavLink padding='0.5em 1em' to='/adopt'>Adopt</NavLink> 
          {userEmail ? (
            <LogOutButton onClick={signOut} padding='0.5em 2em' backgroundcolor='white' marginLeft='1em'>Logout</LogOutButton>
            ) :
          (
            <NavLink padding='0.5em 2em' to='/auth' backgroundcolor='white'>SignIn/SignUp</NavLink>
          )} 
        </NavLinksContainer>

        <FiMenuContainer onClick={handleMenuClick}>
          {showMenu ? <FiXIcon /> : <FiMenuIcon />}
        </FiMenuContainer>

        <DropdownLinksContainer showMenu={showMenu}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About us</NavLink>
          <NavLink to='/adopt'>Adopt</NavLink>
          {userEmail ? (
            <LogOutButton onClick={signOut} padding='0.5em 2em' backgroundcolor='rgba(245, 222, 179, 0.9)'>Logout</LogOutButton>
          ):
          (
            <NavLink to='/auth'>Login/SignUp</NavLink>

          )}
        </DropdownLinksContainer>

      </NavContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation