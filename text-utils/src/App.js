import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";


let name = "Hi Rishita!";

function App() {
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if (mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">

      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      <About />
      </div>
    </>
  );
}

export default App;
