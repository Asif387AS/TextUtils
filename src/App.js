import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");

      //   setInterval(() => {
      //     document.title = "install TextUtils now";
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = "TextUtils is amazing";
      //   }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };

  return (
    <>
    <Router>
         <Navbar
          title="TextUtils"
          aboutTextUtils="about"
          mode={mode}
          toggle={toggle}
        ></Navbar>
        {/* <Navbar></Navbar> */}
        <Alert alert={alert} />
        <div className="container my-3">
          
            
            {/* /users  -->component1
            /users/home -->component2 */}
            {/* exact is use for exact matching */}
              <Switch>
          <Route exact path="/">
            <TextForm
                heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> 
          </Route>
          <Route exact path="/about">
        <About/> 
          </Route>

        </Switch>
            
         
          {/* <TextForm
           heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert} 
        />  */}
        </div>
        </Router>

    </>
  );
}

export default App;
