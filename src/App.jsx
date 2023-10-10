import React, { useState } from "react";
import NewForm from "./components/NewForm";
import OldForm from "./components/OldForm";
import "./style.css";

export function App(props) {
  const [toggleApps, setToggleApps] = useState(false);
  const toggleYoutubeForms = () => {
    return setToggleApps((bool) => !bool);
  };

  return (
    <div className="App">
      <button onClick={toggleYoutubeForms} type="button">
        {!toggleApps ? "New " : "Old "} YoutubeForm
      </button>
      <br />
      {toggleApps && <NewForm />}
      {!toggleApps && <OldForm />}
    </div>
  );
}

// Log to console
console.log("Hello console");
