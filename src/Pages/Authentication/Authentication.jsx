import React, {useState} from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

function Authentication() {

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };


  return (
    <div>
      {isSignUp ? (
      <SignUp toggleForm={toggleForm}/>
      ) : (
        <SignIn toggleForm={toggleForm}/>
      )} 
      
    </div>
  )
}

export default Authentication

