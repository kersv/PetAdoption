import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {FiMenu, FiX} from 'react-icons/fi'


const slideDown = keyframes`
0% {
  transform: translateY(-100%);
}
100% {
  transform: translateY(0);
}
`


export const NavContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 4.6em;
padding: 2em 2em;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 999;
background-color: rgba(245, 222, 179, 0.9);
animation: ${slideDown} 1s ease-in-out;
`

export const LogoContainer = styled.div`
 
`

export const Logo = styled(Link)`
text-decoration: none;
color: #1E2E3B;
font-weight: bold;
`

export const NavLinksContainer = styled.div`
@media screen and (max-width: 800px){
  display: none;
}
`


export const NavLink = styled(Link)`
padding: ${props => props.padding};
text-decoration: none;
color: #1E2E3B;
margin-left: 1em;
border-radius: 2em;
transition: color 1s;
font-weight: bold;
background-color: ${props => props.backgroundcolor};
&:hover{
  color: rgb(104, 70, 13);
}
`

export const FiMenuContainer = styled.div`
display: none;

@media screen and (max-width: 800px) {
  display: block;
  cursor: pointer;
}
`

export const FiMenuIcon = styled(FiMenu)`
font-size: 1.5em;
color: #1E2E3B;
`

export const FiXIcon = styled(FiX)`
font-size: 1.5em;
color: #1E2E3B;
`

const slideDownNav = keyframes`
0% {
  transform: translateY(-100%);
}
100% {
  transform: translateY(0);
}
`

export const DropdownLinksContainer = styled.div`
display: none;
position: absolute;
top: 0;
right: 0;
background-color: rgba(245, 222, 179, 0.9);
padding: 1em;
animation: ${slideDownNav} 1.5s ease-in-out;
${NavLink} {
  display: block;
  margin: 1em 0;
  font-size: 1.2em;
}

@media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: calc(100vh - 4.6em);
  top: ${props => props.showMenu ? '4.6em' : '-100vh'};
  right: 0;
  z-index: 999;
  overflow: auto;
  animation: ${props => props.showMenu ? slideDownNav : 'none'} 1.5s ease-in-out;

}
`
const scaleIn = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
`

export const LogOutButton = styled.button`
padding: ${props => props.padding};
border-radius: 2em;
border: none;
color: #1E2E3B;
margin-left: ${props => props.marginLeft};
cursor: pointer;
font-weight: bold;
font-size: 1em;
background-color: ${props => props.backgroundcolor};

&:hover,
  &:active {
    animation: ${scaleIn} 1s ease-in-out;
}


`
