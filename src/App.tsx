import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  const [channelName, setChannelName] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setChannelName(e.target.value)}
        placeholder="Channel Name"
        value={channelName}
      />
      <button
        className={`join-channel ${channelName ? "disabled" : ""}`}
        disabled={!channelName}
        onClick={() => {
          navigate(`/meet/${channelName}`);
        }}
      >
        <span>Join Channel</span>
      </button>
    </div>
  );
}

export default App;
