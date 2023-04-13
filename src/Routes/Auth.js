import { ButtonContainer } from "../Components/AdoptContainer.styles"
import { AuthContainer, LoginContainer, TextContainer, SignInButton} from "../Components/AuthContainer.styles"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../Redux/user"
import { signInWithGooglePopup } from "../Firebase/firebase.utils"
import { useNavigate } from "react-router-dom"


const Auth = () => {
  const dispatch = useDispatch()
  const {userName} = useSelector(state => state.user)
  
  let navigate = useNavigate()
  if(userName) {
    navigate('/adopt')
  }

  const signInWithGoogle = async () => {
    try{
      const {user} = await signInWithGooglePopup();
      console.log(user)
      dispatch(setCurrentUser({userName: user.displayName, userEmail: user.email}))
      
    }
    catch(error){
      console.log(error)
    }
  }


  return (
    <AuthContainer>
      <LoginContainer>
        <TextContainer fontSize='1.5em'>Sign in with Google</TextContainer>
        <ButtonContainer>
          <SignInButton type="button" onClick={signInWithGoogle}>Google Sign In</SignInButton>
        </ButtonContainer>
      </LoginContainer>
    </AuthContainer>
  )
}

export default Auth