import { useState } from "react";
import { createAuthUserWithEmailAndPassword} from '../Firebase/firebase.utils'
import { SignupContainer, SignupTitle, SignupDesc, SignupForm, InputContainer, SignupInput, ButtonContainer, SignupButton, } from "./Styles/Signup.styles";


const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword( email, password);
      resetForm()
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('cannot create user, email already in use')
      }
      else{
        console.log('error' , error.message)
      }
    }
  };


  return (
    <SignupContainer>
    
      <SignupTitle color='black'>Don't have an account?</SignupTitle>
      <SignupDesc color='black'>Sign up with your email and password</SignupDesc>
      <SignupForm onSubmit={handleSignup}>
        <InputContainer>
          <SignupInput type="email" required placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <SignupInput type="password" required placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <SignupInput type="password" required placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </InputContainer>
        <ButtonContainer>
          <SignupButton type="submit" backgroundcolor='#FF860B' hoverColor='#FF9357'>Sign Up</SignupButton>
        </ButtonContainer>
      </SignupForm>
    </SignupContainer>
  )
}

export default SignUp