import React from "react";

export const MainPage = () => {
  return (
    <div>
      <div
        className="main-container d-flex flex-wrap justify-content-center "
        style={{
          backgroundColor: "#F0F0F0",
          width: "fit-content",
          margin: "auto",
          paddingTop: "4rem",
        }}
      >
        <div
          className="left_side"
          style={{
            backgroundColor: "#F0F0F0",
            display: "flex",
            // margin: "50px",
          }}
        >
          <div
            className="mainFr d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: "#F0F0F0" }}
          >
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "700",
                marginLeft: "8px",
                marginRight: "8px",
              }}
            >
              Meet Our Talented Team
            </h1>
            <p style={{ marginTop: "2rem" }}>
              we're passionate about delivering high quality
              <br /> content for your success
            </p>
          </div>
        </div>
        <div
          className="right_side"
          style={{
            margin: "50px",
          }}
        >
          <iframe
            style={{ borderRadius: "10px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RZoqBJhb44w?si=cnR-a94U3A3w8WEZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
