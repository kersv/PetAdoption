import { TbPhotoPlus, TbPhotoMinus, TbDownload, TbSquareMinus } from "react-icons/tb";
import styled, { keyframes} from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const AdoptContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-top: 4.6em;
height: calc(100vh - 4.6em);
@media screen and (max-width: 800px){
  flex-direction: column-reverse;
} 
`

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

export const FilterContainer = styled.div`
border-right: 1px solid black ;
margin-right: 1em;
width: 15%;
position: sticky;
top: 0;
display: flex;
flex-direction: column;
color: white;
animation: ${fadeIn} 1s ease-in-out;
@media screen and (max-width: 800px){
  width: 100%;
  border-top: 1px solid black ;
  margin-top: 1em;
  border-right: 0 ;
  margin-right: 0;
} 
`

export const SearchInput = styled.input`
background: none;
background-color: #DCDCDC;
color: black;
font-size: 1em;
padding: .5em;
border: none;
border-radius: 4px;
border-bottom: 1px solid gray;
margin: .4em 1em .5em 0;
letter-spacing: .1em;
outline: none;
@media screen and (max-width: 800px){
  margin-right: 0;
  text-align: center;
}
`

export const SelectAllButton = styled.button`
color: black;
border: none;
border-radius: 4px;
padding: .5em;
font-size: 1em;
cursor: pointer;
margin-right: 1em;
background-color: rgba(255,255,255, .6);
transition: background-color 0.5s ease;
width: 50%;
/* background-color: white; */
&:hover {
  background-color: #FF9357;
}
`
export const ClearAllButton = styled.button`
width: 50%;
color: black;
border: none;
border-radius: 4px;
padding: .5em;
font-size: 1em;
cursor: pointer;
margin-right: 1em;
background-color: rgba(255,255,255, .6);
transition: background-color 0.5s ease;
&:hover {
  background-color: #FF9357;
}
@media screen and (max-width: 800px){
  margin-right: 0;
}
`



export const DownloadSelected = styled.button`
color: black;
border: none;
border-radius: 4px;
padding: .5em;
margin-right: 1em;
font-size: 1em;
margin-bottom: .5em;
background-color: rgba(255,255,255, .6);
cursor: pointer;
transition: background-color 0.5s ease;
&:hover {
  background-color: #FF9357;
}
@media screen and (max-width: 800px){
  margin-right: 0;
}
`

export const Wrapper = styled.div`
/* background-color: red; */
/* background-color: white; */
background-color: rgba(255,255,255, .6);
border-radius: 4px;
margin-right: 1em;
overflow-y: auto;
@media screen and (max-width: 800px){
  display: none;
}

`

export const SelectedContainer = styled.div`
margin: 0 .2em .1em .5em;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 4px;

`

export const RemoveSelected = styled(TbSquareMinus)`
font-size: 2em;
color: black;
cursor: pointer;
`

export const PetGridContainer = styled.div`
width: 85%;
overflow-y: auto;
color: white;
-webkit-overflow-scrolling: touch; 
scroll-behavior: smooth; 
animation: ${fadeIn} 1s ease-in-out;
margin-top: .4em;
margin-bottom: 1em;

::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media screen and (max-width: 800px){
  width: 100%;
} 
  
`

export const PetGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;

@media screen and (max-width: 800px) {
  grid-template-columns: 1fr 1fr;
}

`

export const PetCard = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
height: 100%;
background-color: rgba(255,255,255, .6);
overflow: hidden;
transform: translateZ(0);

`

export const ImageContainer = styled.div`
width: 100%;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;

`

export const PetImage = styled(LazyLoadImage)`
width: ${props => props.width};
height: ${props => props.height};
object-fit: cover;
object-position: center;
`

export const DescriptionWrapper = styled.div`
display: flex;
flex-direction: row;
height: 30%;
width: 100%;
padding: 10px;
@media screen and (max-width: 800px) {
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  
}
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 70%;

`

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: ${props => props.width};
margin-bottom: ${props => props.marginBottom};

@media screen and (max-width: 800px){
  justify-content: flex-end;
}

`

export const PetTitle = styled.p`
text-align: ${props => props.textAlign};
font-size: ${props => props.fontSize};
color: black;
font-weight: ${props => props.fontWeight};
margin: ${props => props.margin};
@media screen and (max-width: 800px){
  display: ${props => props.MobileDisplay};
}

`
export const PetDesc = styled.p`
font-size: .9em;
margin: 10px 0;
text-align: center;
color: black;
@media screen and (max-width: 800px){
  font-size: .7em;
}

`

export const PhotoPlus = styled(TbPhotoPlus)`
font-size: 2em;
cursor: pointer;
color: black;
transition: transform .2s ease-in-out;
margin-right: .2em;
&:hover {
  transform: scale(1.2);
}


`
export const PhotoMinus = styled(TbPhotoMinus)`
cursor: pointer;
color: black;
transition: transform .2s ease-in-out;
font-size: 2em;
margin-right: .2em;
&:hover {
  transform: scale(1.2);
}

`
export const Download = styled(TbDownload)`
margin-right: .2em;
cursor: pointer;
color: black;
font-size: 2em;
transition: transform .2s ease-in-out;
&:hover {
  transform: scale(1.2);
}

`

