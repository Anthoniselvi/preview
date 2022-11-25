import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [youtubeURL, setYoutubeURL] = useState(
    "https://www.youtube.com/watch?v=L93hyPiltLA&t=442s"
  );
  const [youtubeError, setYoutubeError] = useState("");
  const handleYoutubeChange = (e) => {
    setYoutubeVideo(e.target.value);
  };
  const handleYoutubeSubmit = (e) => {
    e.preventDefault();
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;

    if (youtubeRegex.test(youtubeVideo)) {
      setYoutubeURL(youtubeVideo);
      setYoutubeError("");
    } else {
      setYoutubeError("Invalid URL");
    }
  };
  return (
    <div className="App">
      <form className="form" onSubmit={handleYoutubeSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your URL"
          required
          onChange={handleYoutubeChange}
        />
        <button type="submit" className="btn">
          Upload
        </button>
      </form>
      {youtubeError && <div className="error-msg">{youtubeError}</div>}
      <br></br>
      <div className="youtube-box">
        <ReactPlayer url={youtubeURL} className="video" control />
      </div>
    </div>
  );
}

export default App;
