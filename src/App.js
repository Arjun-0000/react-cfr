import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Component/Navbar';
import Header from './Component/Header';
import { Button } from 'reactstrap';
import Structure from './Classes/Structure';


function App() {

  const [ showNavbar, setShowNavbar ] = useState(true);

  const fxnShowNavbar = () => {
    showNavbar ? setShowNavbar(false) : setShowNavbar(true) ;
  }

  return (
    <div>
      { 
        showNavbar 
        ?
        <div> 
          <Navbar /> 
          <Header />
        </div>
        :
        <div>
          <Structure />
        </div> 
      }
      <Button onClick={fxnShowNavbar}>test change pages</Button>
    </div>
  );
}

export default App;