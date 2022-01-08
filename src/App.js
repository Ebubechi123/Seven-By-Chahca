import './App.css';
import React from 'react';
import { Switch } from "react-router-dom";
import Header from './Component/Header/Header';
import MainSection from './Component/MainSection/MainSection';
import Routes from './Routes/Routes';
import Nav from './Component/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch >
      {/* <Header /> */}
      <Routes/>
      </Switch>
    </div>
  );
}

export default App;
