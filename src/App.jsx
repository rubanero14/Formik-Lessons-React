import React, { useState } from "react";
import YoutubeForm from "./components/YoutubeForm";
import OldYoutubeForm from "./components/OldYoutubeForm";
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
      {toggleApps && <YoutubeForm />}
      {!toggleApps && <OldYoutubeForm />}
    </div>
  );
}

// Log to console
console.log("Hello console");
