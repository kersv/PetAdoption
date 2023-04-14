import styled from "styled-components";


export const SigninContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
/* border: 1px solid black; */
`

export const SigninTitle = styled.h2`
margin-bottom: 1em;
color: ${props => props.color};
/* border: 1px solid black; */
`
export const SigninDesc = styled.p`
margin-bottom: 1em;
color: ${props => props.color};
/* border: 1px solid black; */
`

export const SigninForm = styled.form`
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
export const SigninInput = styled.input`
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
/* border:1px solid black; */
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* border: 1px solid black; */
`

export const SigninButton = styled.button`
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
