import { AboutContainer, MissionContainer, Text, ContactContainter, ContactInfoContainer, TextContainer, ContactInfo, EmailIcon, PhoneIcon, LocationIcon } from "../Components/Styles/AboutContainer.styles"

const About = () => {
  return (
    <AboutContainer>
      <MissionContainer>
        <TextContainer width='80%' resWidth='100%' center='center'>
          <Text fontSize='2em' fontWeight='bold' marginBottom='.5em'>About Us</Text>
          <Text fontSize='1.4em'>At Adopet, we understand that adopting a pet is a big decision and commitment, which is why we offer a range of resources and support to help owners and pets thrive together. Our ultimate goal is to reduce the number of homeless pets and make a positive impact on the animal welfare community, one adoption at a time.</Text>
        </TextContainer>
      </MissionContainer>
      <ContactContainter>
        <Text fontSize='2em' fontWeight='800' marginBottom='.5em'>Contact Us</Text>
        <ContactInfoContainer>
          <ContactInfo >
            <EmailIcon/>
            <TextContainer>
              <Text fontSize='1.5em'>Email</Text>
              <Text fontSize='1.2em'>Adopet@project.com</Text>
            </TextContainer>
          </ContactInfo>
          <ContactInfo>
            <PhoneIcon/>
            <TextContainer>
              <Text fontSize='1.5em'>Phone</Text>
              <Text fontSize='1.2em'>(555) 123-4567</Text>
            </TextContainer>
          </ContactInfo>
          <ContactInfo>
            <LocationIcon/>
            <TextContainer>
              <Text fontSize='1.5em'>Office</Text>
              <Text fontSize='1.2em'>123 Main Street, Anytown, USA 12345</Text>
            </TextContainer>
          </ContactInfo>

        </ContactInfoContainer>
       
      </ContactContainter>

    </AboutContainer>
  )
}

export default About