import React, { useState } from "react";
import "./VolumePlayer.css";

const VolumePlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <h2 className="volume-player-heading">Volume Player</h2>
      <div className="volume-player">
        <div className="audio-controls">
          <button
            className={`mute-button ${isMuted ? "muted" : ""}`}
            onClick={handleMuteToggle}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
          <button
            className={`play-button ${isPlaying ? "playing" : ""}`}
            onClick={handlePlayToggle}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        <div className="file-input-container">
          <label htmlFor="file-input" className="file-input-label">
            Choose Audio
          </label>
          <input
            type="file"
            id="file-input"
            accept="audio/*"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>

        {selectedFile && (
          <div className="audio-info">
            <div className="audio-name">{selectedFile.name}</div>
            <audio
              ref={(audio) => (audio ? (audio.muted = isMuted) : null)}
              src={URL.createObjectURL(selectedFile)}
              autoPlay={isPlaying}
              controls
              className="audio-player"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VolumePlayer;
