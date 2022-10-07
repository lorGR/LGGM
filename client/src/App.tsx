import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';

function App() {

  useEffect(() => {
    /* global google */
    //@ts-ignore
    google.accounts.id.initialize({
      client_id: "924677506476-h5paqp1lqhvgnctprtq051dckuq2vvt1.apps.googleusercontent.com",
      callback: handleGoogleLogin
    })

    //@ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []);

  const handleGoogleLogin = (response: any) => {
    try {
      const userData = jwtDecode(response.credential);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
