import styled, {keyframes} from "styled-components";
import {MdEmail, MdPhone, MdLocationOn} from 'react-icons/md'

export const AboutContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 4.6em;
height: calc(100vh - 4.6em);
/* border: 1px solid black; */
@media screen and (max-width:800px){
  flex-direction: column;
}
`

const fadeInMission = keyframes`
0% {
  opacity: 0;
  transform: translateY(-50px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`

export const MissionContainer = styled.div`
/* border: 1px solid black; */
flex: 1;
height: 100%;
padding: 2em;
display: flex;
justify-content: center;
align-items: center;
animation: ${fadeInMission} 1s ease-in-out;
`

export const TextContainer = styled.div`
/* border: 1px solid black; */
width: ${props => props.width};
display: flex;
flex-direction: column;
align-items: ${props => props.center};

@media screen and (max-width: 800px){
  width: ${props => props.resWidth};
}

`

export const Text = styled.p`
font-size: ${props => props.fontSize};
font-weight: ${props => props.fontWeight};
margin-bottom: ${props => props.marginBottom};
@media screen and (max-width: 800px){
  font-size: 1em;

}

`

const fadeInContact = keyframes`
0% {
  opacity: 0;
  transform: translateY(50px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`

export const ContactContainter = styled.div`
/* border: 1px solid black; */
flex: 1;
height: 100%;
padding: 2em;
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
animation: ${fadeInContact} 1s ease-in-out;
@media screen and (max-width: 800px){
  padding: 0;
}
`

export const ContactInfoContainer = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`

export const ContactInfo = styled.div`
display: flex;
justify-content: center;
/* border: 1px solid red; */
margin-bottom: 1em;
@media screen and (max-width: 800px){
  margin-bottom: 0;
}
`

export const EmailIcon = styled(MdEmail)`
font-size: 1.5em;
margin-right: .5em;
height: 1.5em;
width: 1.5em;
@media screen and (max-width: 800px){
  font-size: 1em;

}
`
export const PhoneIcon = styled(MdPhone)`
font-size: 1.5em;
margin-right: .5em;
height: 1.5em;
width: 1.5em;
@media screen and (max-width: 800px){
  font-size: 1em;  
}
`
export const LocationIcon = styled(MdLocationOn)`
font-size: 1.5em;
margin-right: .5em;
height: 1.5em;
width: 1.5em;
@media screen and (max-width: 800px){
  font-size: 1em;
}
`