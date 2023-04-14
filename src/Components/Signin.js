import { useState, useEffect } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from '../Firebase/firebase.utils'
import { SigninContainer, SigninTitle, SigninDesc, SigninForm, SigninInput, ButtonContainer, SigninButton, InputContainer} from "./Styles/Signin.styles";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../Redux/user"

const SignIn = () => {
  const dispatch = useDispatch()
  const {userEmail} = useSelector(state => state.user)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  
  
  useEffect(() => {
    if(userEmail) {
      navigate('/adopt')
    }
  }, [userEmail, navigate])

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(user.email)
      dispatch(setCurrentUser({userEmail: user.email}))
      resetForm()
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('Invalid password')
          break
        case 'auth/user-not-found':
          alert('Invaild user')
          break
        default:
          console.log(error)
      }
    }
  };

  const signInWithGoogle = async () => {
    try{
      const {user} = await signInWithGooglePopup();
      dispatch(setCurrentUser({userEmail: user.email}))
      
    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <SigninContainer>
      <SigninTitle color='black'>Already have an account?</SigninTitle>
      <SigninDesc color='black'>Sign in with your email and password</SigninDesc>
      <SigninForm onSubmit={handleSignin}>
        <InputContainer>
          <SigninInput type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <SigninInput type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </InputContainer>
        <ButtonContainer>
          <SigninButton type="submit" backgroundcolor='#FF860B' hoverColor='#FF9357'>Sign In</SigninButton>
          <SigninButton type="button" onClick={signInWithGoogle} backgroundcolor='#4285F4' hoverColor='#3367D6'>Google Sign In</SigninButton>
        </ButtonContainer>
      </SigninForm>
    </SigninContainer>
  )
}

export default SignIn