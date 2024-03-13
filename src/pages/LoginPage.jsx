import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

function LoginPage() {

    const handleSuccess = (credentialResponse) => {
     
        console.log('Google login successful', credentialResponse);
      };
    
      const handleError = () => {
   
        console.log('Google login failed');
      };
    
    
  return (
    <>
    <div>LoginPage</div>
    <br />
    <GoogleLogin
    theme='outline'
    shape='circle'
    text='continue_with'
    width={220}
    // type='icon'
      onSuccess={handleSuccess}
      onError={handleError}
      useOneTap
      flow="auth-code"
    />
    </>
  )
}

export default LoginPage