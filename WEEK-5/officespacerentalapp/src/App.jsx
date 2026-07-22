import { useState } from 'react'
import officeimg from "./assets/office.png"
import './App.css'

function App() {
  const office = {
    Name : "CTS",
    Rent : 50000,
    Address : "Chennai"
  };

  const offices = [
    {
    Name : "CTS",
    Rent : 50000,
    Address : "Chennai"
    },
    {
    Name : "Regus",
    Rent : 75000,
    Address : "Bangalore"
    },
    {
    Name : "Wework",
    Rent : 45000,
    Address : "Chennai"
    }
  ]
  return(
    <div className="container">
      <h1>Office space at affordable Range</h1>
      {
        offices.map((item,ind)=>(
          <div className="card">
            <img src={officeimg} alt="office space" width="250" height="200" />
            <h2>Name : {item.Name}</h2>
            <h3 style = {{color:item.Rent<=60000?"red":"green"}} >
                 Rent : {item.Rent}
            </h3>
            <h3>Address : {item.Address} </h3>
          </div>
        ))
      }
    </div>
  );
}

export default App
