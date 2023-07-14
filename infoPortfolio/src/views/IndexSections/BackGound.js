import React from "react";
class BackGound extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* BackGound for FREE version */}
          <section className="section-profile-cover section-shaped my-0">
            {/* Background circles */}
            <video autoPlay loop muted playsInline>
              <source
                src={require("assets/img/icons/common/backVideo.mp4")}
                type="video/mp4"
              />
            </video>
            <div style={{ position: "absolute", top: "35%", width: "100%" }}>
              <p
                style={{
                  marginTop: "-24px",
                  textAlign: "center",
                  fontSize: "25px",
                  color: "#ffffff",
                  fontFamily: "monospace",
                }}
              >
                당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.{" "}
                <br />
              </p>
              <p
                style={{
                  marginTop: "-34px",
                  textAlign: "center",
                  fontSize: "18px",
                  color: "#ffffff",
                  fontFamily: "monospace",
                }}
              >
                -헨리 포드-
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default BackGound;
