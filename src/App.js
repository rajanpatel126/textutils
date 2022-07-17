import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Textutils" abouttextutils="About Textutils" mode={mode} toggleMode={toggleMode}/>
      
      {/* <Navbar />? */}
      <div className=" border-top">
      <Textform mode={mode} heading="Enter the text to Analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
