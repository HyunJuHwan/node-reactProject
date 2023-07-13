import React from "react";
class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section-profile-cover section-shaped my-0">
            {/* Background circles */}
            <video controls>
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

export default Hero;
