import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Timer from "./components/timer";

function App() {
  return (
    <div className="relative h-screen w-full bg-slate-950">
      <div>
        <Header />
        <h1>What do you get when you cross a VFX artist and coding?</h1>
        <h1>About</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
        <Timer />
      </div>
    </div>
  );
}

export default App;
