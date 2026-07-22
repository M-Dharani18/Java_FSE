import { useState } from 'react'
import './App.css'
import ListofPlayers from './ListofPlayers';
import DisplayIndianPlayers from './IndianPlayers';

function App() {
  
  const flag = false;
  if(flag){
    return <ListofPlayers/>;
  }
  else{
    return <DisplayIndianPlayers/>
  }
}

export default App
