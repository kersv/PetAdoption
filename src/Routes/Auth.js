import { AuthContainer, SignInContainer, SignUpContainer} from "../Components/Styles/AuthContainer.styles"
import SignUp from "../Components/Signup"
import SignIn from "../Components/Signin"


const Auth = () => {
  return (
    <AuthContainer>
      <SignInContainer>
        <SignIn/>
      </SignInContainer>
      <SignUpContainer>
        <SignUp/>
      </SignUpContainer>
    </AuthContainer>
  )
}

export default Auth