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
          </section>
        </div>
      </>
    );
  }
}

export default BackGound;
