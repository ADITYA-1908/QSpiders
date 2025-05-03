import React from "react";
import "./Pages.css";
const PageComponent = ({
  isVideo,
  backgroundMedia,
  line1,
  line2,
  line3,
  btn,
}) => {
  return (
    <div
      className="page-section"
      style={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        paddingLeft: "5%",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isVideo ? (
        <video
          src={backgroundMedia}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${backgroundMedia})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}

      <div
        className="text-content"
        style={{
          zIndex: 2,
          position: "relative",
          color: "white",
          textAlign: "center",
          top: "30%",
          transform: "translateY(-50%)",
        }}
      >
        <p>{line1}</p>
        <h2>{line2}</h2>
        {line3 && <p>{line3}</p>}
        <button
          style={{
            background: "none",
            color: "white",
            height: "40px",
            width: "100px",
            border: "2px solid white",
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default PageComponent;
