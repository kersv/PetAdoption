import styled from "styled-components";

export const AuthContainer = styled.div`
display: flex;
border: 1px solid black;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
margin-top: 4.6em;
height: calc(100vh - 4.6em);
`

export const LoginContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 30%;
border: 1px solid red;
height: 70%;
margin-right: 1em;
padding: 1em;

`

export const TextContainer = styled.p`
font-size: ${props => props.fontSize};

`
export const Input = styled.input`
background-color: none;
`

export const SignInButton = styled.button`
padding: 1em;
width: 100%;
border-radius: 1em;
border: none;
cursor: pointer;
`


export const SignUpContainer = styled.div`
display: flex;
justify-content: center;
/* align-items: center; */
width: 30%;
border: 1px solid red;
height: 70%;
margin-right: 1em;
padding: 1em;

`