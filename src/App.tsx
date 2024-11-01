import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  const [channelName, setChannelName] = useState("");

  return (
    <div className="flex h-screen w-full items-center justify-center gap-5 ">
      <input
        className="w-[250px] px-2 py-2 border-2 rounded-md border-blue-500"
        onChange={(e) => setChannelName(e.target.value)}
        placeholder="Channel Name"
        value={channelName}
      />
      <button
        className={` bg-blue-500 rounded-md p-2 px-4 font-bold   text-white ${
          channelName ? "disabled" : ""
        }`}
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
