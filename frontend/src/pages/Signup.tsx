// import React from 'react';
import { Auth } from "../components/Auth"
import { GoogleOAuthProvider } from "@react-oauth/google"
const GOOGLE_CLIENT_ID = '692832899029-na2s7coc6g58j0s2a2i1f1oc1sjoa8u6.apps.googleusercontent.com' 


export const Signup = ()=> {
  return <div>
        <div className="">
            <div>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <Auth type="signup"/>
            </GoogleOAuthProvider>
            </div>
        </div>
  </div>
}