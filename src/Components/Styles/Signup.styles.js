import styled from "styled-components";


export const SignupContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const SignupTitle = styled.h2`
margin-bottom: 1em;
color: ${props => props.color};
/* border: 1px solid black; */
`

export const SignupDesc = styled.p`
margin-bottom: 1em;
color: ${props => props.color};
/* border: 1px solid black; */
`

export const SignupForm = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* border: 1px solid black; */
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid black; */
`

export const SignupInput = styled.input`
background: none;
background-color: #DCDCDC;
color: black;
font-size: 1em;
padding: .5em;
border: none;
border-radius: 4px;
border-bottom: 1px solid gray;
margin-bottom: .4em;
letter-spacing: .1em;
outline: none;
width: 100%;
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* border: 1px solid black; */
`


export const SignupButton = styled.button`
 color: black;
border: none;
width: 100%;
border-radius: 4px;
padding: .5em;
font-size: 1em;
margin-bottom: .5em;
background-color: ${props => props.backgroundcolor};
cursor: pointer;
transition: background-color 0.2s ease;
&:hover {
  background-color: #DCDCDC;
  background-color: ${props => props.hoverColor};
}
`
