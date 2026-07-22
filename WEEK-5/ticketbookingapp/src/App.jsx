import { useState } from 'react'

import Greeting from './Greeting'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import './App.css'

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  function login(){
    setIsLoggedIn(true);
  }
  function logout(){
    setIsLoggedIn(false);
  }
  return(
  <>
  <div style={{margin:"40px"}}>
    <Greeting isLoggedIn={isLoggedIn}/>{
      isLoggedIn ? <LogoutButton onClick={logout}/> :
      <LoginButton onClick={login}/>
    }
  </div>
  </>
  );
}

export default App
