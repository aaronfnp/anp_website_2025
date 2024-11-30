import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Timer from "./components/timer";

function App() {
  return (
    <>
      <Header></Header>
      <h1> What do you get when you cross a VFX artist and coding?</h1>
      <h1>About</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
      <Timer></Timer>
    </>
  );
}

export default App;
