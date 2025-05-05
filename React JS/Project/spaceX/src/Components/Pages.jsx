import React from "react";
// Assuming Bootstrap CSS is imported globally or in a parent component
// import "bootstrap/dist/css/bootstrap.min.css";

const PageComponent = ({
  isVideo,
  backgroundMedia,
  line1,
  line2,
  line3,
  btn,
}) => {
  // Responsive font size classes remain the same
  const line1Classes = "fs-6 fs-md-5";
  const line2Classes = "display-6 display-md-4 fw-bold";
  const line3Classes = "fs-6 fs-md-5 mb-4"; // Added mb-4 for spacing
  const buttonClasses = "btn btn-outline-light btn-sm py-md-2 px-md-4";

  return (
    <div
      className="page-section"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "flex-end", // Align content block to the bottom
        // Adjust padding: using 10px fixed padding on left/right
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "15vh", // Keep padding from the bottom
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video or Image (remains the same) */}
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
          aria-hidden="true"
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
          role="img"
          aria-label={line2 || "Background image"}
        />
      )}

      {/* Text Content */}
      <div
        // Removed text-center text-md-start. Text will now naturally align left
        // within this block due to default browser behavior.
        className="text-content"
        style={{
          zIndex: 1,
          position: "relative",
          color: "white",
          // width: "100%", // Let it size naturally or set a max-width if needed
        }}
      >
        {/* Apply responsive classes */}
        {/* Added text-uppercase for consistency with potential SpaceX style */}
        {line1 && (
          <p className={`${line1Classes} text-uppercase mb-1`}>{line1}</p>
        )}

        {line2 && <h2 className={`${line2Classes} text-uppercase`}>{line2}</h2>}

        {/* Render line3 only once */}
        {line3 && <p className={`${line3Classes}`}>{line3}</p>}

        {btn && (
          <button type="button" className={buttonClasses}>
            {btn}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageComponent;
