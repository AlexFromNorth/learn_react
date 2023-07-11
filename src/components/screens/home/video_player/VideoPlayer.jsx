import React, { useRef } from "react";

const VideoPlayer = ({ src, ...props }) => {
  const ref = useRef();

  const handlerPlay = () => {
    ref.current.play();
  };

  const handlerPause = () => {
    ref.current.pause();
  };

  return (
    <>
      <div className="video">
        <video width="750" height="500" controls ref={ref}>
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <button onClick={handlerPlay} className="m30">
          Play
        </button>
        <button onClick={handlerPause}>Pause</button>
      </div>
    </>
  );
};

export default VideoPlayer;
