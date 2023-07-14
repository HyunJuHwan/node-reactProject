import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Container,
  Row,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import BackGound from "./IndexSections/BackGound.js";
import Carousel from "./IndexSections/Carousel.js";

class Index extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main" className="profile-page">
          <BackGound /> {/* 상단 영역 */}
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--450">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/icons/common/profile.png")}
                            id="profile"
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    ></Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">&nbsp;</span>
                          <span className="description">&nbsp;</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div
                    className="text-left mt-5"
                    style={{ marginLeft: "20px" }}
                  >
                    <h3>
                      현주환{" "}
                      <span
                        className="font-weight-light"
                        style={{ fontSize: "large" }}
                      >
                        1997.03.06
                      </span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      서울특별시 송파구
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Web Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      <p>
                        2022. 04 ~ 2022. 12 <br />
                        위쉬정보기술 개발팀 대리
                        <br />
                        2022. 12 ~
                        <br />
                        네이버시스템 솔루션개발팀 선임 연구원
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-components" id="project">
            <Container>
              <Carousel /> {/* project 내용 */}
            </Container>
          </section>
          <section className="section bg-gradient-default" id="contact">
            {/* <section className="section section-lg pt-lg-0 section-contact-us"> */}
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* </section> */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
