// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";


function App() {
  const [Mode, setMode] = useState("light");
  const [ModeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (Mode !== "dark") {
      setMode("dark");
      setModeText("Enable LightMode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "dark");

    } else {
      setMode("light");
      setModeText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
    
  };

  return (
    <>
      <Navbar
        title={"TextUtils"}
        HomeText={"Home"}
        AboutText={"About"}
        mode={Mode}
        modetext={ModeText}
        togglemode={toggleMode}
      />

      <Alert alert={alert} />

      <TextForm
        showAlert={showAlert}
        Heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
        mode={Mode}
      />
    </>
  );
}

export default App;
