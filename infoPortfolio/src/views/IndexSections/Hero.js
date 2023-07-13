import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section-profile-cover section-shaped my-0">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
