import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useParams } from "react-router-dom";

const VideoCall = () => {
  const params = useParams();
  const a = import.meta.env.VITE_VIDEO_CALL_ID;
  // console.log({ id, a });
  const [videoCall, setVideoCall] = useState(false);
  const rtcProps = {
    appId: a || "test",
    channel: params?.id || "test", // your agora channel
    token: null, // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit
        rtcProps={rtcProps}
        callbacks={callbacks}
        styleProps={{
          maxViewStyles: {
            // Adjust styles for maximum view
            layout: "grid",
            grid: {
              row: 1, // Number of rows
              col: 5, // Number of columns (5 elements per row)
              gap: 10, // Optional gap between video views
            },
          },
        }}
      />
    </div>
  ) : (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        className={` bg-blue-500 w-[300px] rounded-md p-2 px-4 font-bold   text-white`}
        // disabled={!}
        onClick={() => setVideoCall(true)}
      >
        <span> Start Call</span>
      </button>
    </div>
  );
};

export default VideoCall;
