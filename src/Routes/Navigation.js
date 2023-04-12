import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavContainer, LogoContainer, Logo, NavLinksContainer, NavLink, FiMenuContainer, FiMenuIcon, FiXIcon, DropdownLinksContainer} from "../Components/NavContainer.styles"



const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

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
          <NavLink padding='0.5em 1em' to='/auth'>Login/SignUp</NavLink>
        </NavLinksContainer>

        <FiMenuContainer onClick={handleMenuClick}>
          {showMenu ? <FiXIcon /> : <FiMenuIcon />}
        </FiMenuContainer>

        <DropdownLinksContainer showMenu={showMenu}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About us</NavLink>
          <NavLink to='/auth'>Login/SignUp</NavLink>
          <NavLink to='/adopt'>Adopt</NavLink>
        </DropdownLinksContainer>

      </NavContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation