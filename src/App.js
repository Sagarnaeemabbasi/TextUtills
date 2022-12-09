import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
function App() {
  let [navbarBg, setnavbarBg] = useState("light");
  // let [bgColor, setBgColor] = useState("white");
  let [bodyColor, setBodyColor] = useState("black");
  let [textareaBodyColor, setTextareaBodyColor] = useState("white");
  const [alert, setAlert] = useState(null);
  const [myStyle, setMyStyle] = useState(null);
  const [innerBodyStyle, setInerBodyStyle] = useState(null);
  let [mode, setMode] = useState("Enable Dark Mode");
  let [greenMode, setgreenMode] = useState("Enable Green Mode");
  let [btnColor, setBtnColor] = useState("primary");

  function showAlert(type, message) {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const enableDarkMode = () => {
    if (navbarBg === "light" || navbarBg === "success") {
      // setBgColor("#0b1546");
      setnavbarBg("dark");
      setBodyColor("white");
      setTextareaBodyColor("black");
      setMode("Disable Dark Mode");
      setMyStyle({
        backgroundColor: "#212529",
        color: "white",
      });
      setInerBodyStyle({
        color: "#fafafaf7",
        backgroundColor: "#0b1546",
      });
      showAlert("success", ": Dark Mode enabled!");
      // setInterval(() => {
      //   document.title = "this is mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Dark Mode Enabled";
      // }, 1500);
    } else {
      // setBgColor("white");
      setnavbarBg("light");
      setBodyColor("black");
      setTextareaBodyColor("white");
      showAlert("success", ": Light Mode enabled!");
      setMyStyle(null);
      setInerBodyStyle(null);
      setMode("Enable Dark Mode");

      // document.title = "Light Mode Enabled";
    }
  };
  const enableGreenMode = () => {
    if (navbarBg === "light" || navbarBg === "dark") {
      setgreenMode("Disable Green Mode");
      setnavbarBg("success");
      showAlert("success", ": Green Mode enabled!");
      // setBgColor("rgb(5 214 5)");
      setTextareaBodyColor("rgb(6 124 6)");
      setBtnColor("success");
    } else {
      setgreenMode("Enable Green Mode");
      setnavbarBg("light");
      showAlert("success", ": Green Mode Disabled!");
      // setBgColor("white");
      setTextareaBodyColor("white");
      setBtnColor("primary");
    }
  };
  let removeClasses = () => {
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-warning");
  };
  let clickDifferentbgHandler = (cls) => {
    console.log(cls);
    removeClasses();
    document.body.classList.add("bg-" + cls);
  };
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <Navbar
          title="TextUtils"
          onClick={enableDarkMode}
          backGround={navbarBg}
          buttonColor={bodyColor}
          mode={mode}
          greenMode={greenMode}
          onClickGreenBtn={enableGreenMode}
          clickDifferentbgHandler={clickDifferentbgHandler}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={
                <About myStyle={myStyle} innerBodyStyle={innerBodyStyle} />
              }
            />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  textareabg={textareaBodyColor}
                  heading="Enter Text here to analyze"
                  color={bodyColor}
                  btnColor={btnColor}
                  button="Change to UpperCase"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
