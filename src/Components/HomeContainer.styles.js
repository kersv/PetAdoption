import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"


export const HomeContainer = styled.div`
display: flex;
flex-direction: row;
/* border: 1px solid white; */
padding: 1em 0;
height: 100vh;

@media screen and (max-width: 800px){
  flex-direction: column-reverse;
}
`
const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const TextContainer = styled.div`
/* border: 1px solid white; */
flex: 2;
padding: 11em 3em;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
animation: ${fadeInText} 1s ease-in-out;

@media screen and (max-width: 800px){
  flex: 3;
  padding: 1em;
}
`

export const Text = styled.p`
/* border: 1px solid white; */
font-size: ${props => props.fontSize};
margin-bottom: ${props => props.marginBottom};
margin-top: ${props => props.marginTop};
color: #1E2E3B;
width: ${props => props.width};
font-weight: ${props => props.fontWeight};
/* padding-left: 1em; */

@media screen and (max-width: 800px){
  font-size: ${props => props.fontSizeMobile};
  margin-bottom: .5em;
  margin-top: .5em;
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

export const AdoptButton = styled(Link)`
text-decoration: none;
width: fit-content;
background-color: white;
padding: ${props => props.padding};
border-radius: 2em;
display: flex;
align-items: center;
justify-content: center;
border: none;
font-size: 1em;
color: #1E2E3B;
cursor: pointer;

svg{
  padding-left: 0.5em;
  height: 1.4em;
  width: 1.4em;
  color: #1E2E3B;
}
&:hover,
  &:active {
    animation: ${scaleIn} 1s ease-in-out;

}

`

const fadeInImage = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ImageContainer = styled.div`
/* border: 1px solid white; */
flex: 3;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
animation: ${fadeInImage} 1s ease-in-out;



@media screen and (max-width: 800px){
  flex: 3;
}

`

export const Grid = styled.div`
display: grid;
/* border: 1px solid white; */
justify-items: center;
position: relative;


`

export const Image1 = styled.img`
width: 50%;
height: 100%;
object-fit: cover;
grid-column: 3 / span 6;
grid-row: 1 / span 2;
z-index: 1;
border-radius: 1em;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);



`
export const Image2 = styled.img`
z-index: 2;
grid-column: 1 / span 6;
grid-row: 2 / span 2;
width: 60%;
height: 80%;
object-fit: cover;
border-radius: 1em;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

`

