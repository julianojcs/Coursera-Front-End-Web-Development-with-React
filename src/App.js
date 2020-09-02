import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Brand from './Brand';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/"><Brand /></NavbarBrand>
            </div>
        </Navbar>
    </div>
  );
}

export default App;
