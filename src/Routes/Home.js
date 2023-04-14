import { HomeContainer, ImageContainer, TextContainer, Text, AdoptButton, Grid, Image1, Image2} from "../Components/Styles/HomeContainer.styles"
import {BsArrowRight} from 'react-icons/bs'


const Home = () => {
  

  return (
    <HomeContainer>
      <TextContainer>
        <Text fontSize='3em' fontSizeMobile='1.8em' marginBottom='1em' width='75%' fontWeight='700'>
          Discover the perfect companion for you and your family
        </Text>
        <Text fontSize='1.2em' fontSizeMobile='1em' marginBottom='1.5em' >
          Bring home a new best friend by adopting
        </Text>
        <AdoptButton padding='0.5em 2em' to='/adopt'>
          Adopt
          <BsArrowRight/>
        </AdoptButton>
      </TextContainer>
      <ImageContainer>
        <Grid>
          <Image1 src='https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
          <Image2 src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?format\u003dtiny'/>
        </Grid>
      </ImageContainer>
    </HomeContainer>
  )
}

export default Home