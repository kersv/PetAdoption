import styled, {keyframes} from "styled-components";


const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(-10px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`

export const AuthContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
margin-top: 4.6em;
height: calc(100vh - 4.6em);
animation: ${fadeIn} 1s ease-in-out;
@media screen and (max-width: 800px){
  flex-direction: column;
}


`

export const SignInContainer = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 70%;
margin-right: 1em;
padding: 1em;

@media screen and (max-width: 800px){
  width: 100%;
}
`
export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 70%;
margin-right: 1em;
padding: 1em;

@media screen and (max-width: 800px){
  width: 100%;
}
`

