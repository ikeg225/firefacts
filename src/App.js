import logo from './images/firewatch.webp';
import './css/header.css';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [all, setAll] = useState(true)
  const [prep, setPrep] = useState(true)
  const [eco, setEco] = useState(true)
  const [proto, setProto] = useState(true)
  const [rec, setRec] = useState(true)
  const [invo, setInvo] = useState(true)

  function clickAll() {
    setAll(true)
    setPrep(true)
    setEco(true)
    setProto(true)
    setRec(true)
    setInvo(true)
  }

  function clickPrep() {
    setAll(false)
    setPrep(true)
    setEco(false)
    setProto(false)
    setRec(false)
    setInvo(false)
  }

  function clickEco() {
    setAll(false)
    setPrep(false)
    setEco(true)
    setProto(false)
    setRec(false)
    setInvo(false)
  }

  function clickProto() {
    setAll(false)
    setPrep(false)
    setEco(false)
    setProto(true)
    setRec(false)
    setInvo(false)
  }

  function clickRec() {
    setAll(false)
    setPrep(false)
    setEco(false)
    setProto(false)
    setRec(true)
    setInvo(false)
  }

  function clickInvo() {
    setAll(false)
    setPrep(false)
    setEco(false)
    setProto(false)
    setRec(false)
    setInvo(true)
  }

  return (
    <div className="App">
      <header>
          <div className="headerContent">
              <div className="leftHeader">
                  <img src={logo} alt="firewatch logo" />
                  <h1>FIREFACTS</h1>
              </div>
              <div className="rightHeader">
                  <h1 onClick={clickAll}>ALL</h1>
                  <h1 onClick={clickPrep}>PREP</h1>
                  <h1 onClick={clickEco}>ECOLOGY</h1>
                  <h1 onClick={clickProto}>PROTOCOLS</h1>
                  <h1 onClick={clickRec}>RECOVERY</h1>
                  <h1 onClick={clickInvo}>GET INVOLVED</h1>
              </div>
          </div>
      </header>
      <Home all={all} prep={prep} eco={eco} proto={proto} rec={rec} invo={invo}/>
    </div>
  );
}

export default App;
