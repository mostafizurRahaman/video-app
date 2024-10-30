import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useParams } from "react-router-dom";

const VideoCall = () => {
  const id = useParams();
  const a = import.meta.env.VITE_VIDEO_CALL_ID;
  console.log(id, a);
  const [videoCall, setVideoCall] = useState(false);
  const rtcProps = {
    appId: "7072621e8aad49d9b50a9fad8b336ade",
    channel: "new", // your agora channel
    token: null, // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default VideoCall;
