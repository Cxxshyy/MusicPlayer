import React, { useState } from "react";
//Adding styles
import "./styles/app.scss";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//import util
import data from "./util";

function App() {
  //State

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <Library />
    </div>
  );
}

export default App;
