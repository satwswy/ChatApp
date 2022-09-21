import { useEffect, useState } from "react";
import { Col, Container, Form, Navbar, Row, Button } from "react-bootstrap/esm";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import "../Styles/registerpage.css";
<link
  rel="stylesheet"
  type="text/css"
  href="//fonts.googleapis.com/css?family=Open+Sans"
/>;

const RegisterPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  useEffect(() => {
    setHaveAccount(false);
  }, []);
  return (
    <Container fluid style={{ backgroundColor: "#204E4A" }} className="pb-5">
      {haveAccount === false ? (
        <Row>
          <Col xs={12} className="pr-0 pl-0">
            <Navbar
              className="pb-3 pt-3"
              style={{ backgroundColor: "whiteSmoke" }}
            >
              <Col xs={2} className="text-left">
                <FaWhatsapp className="whatsappIcon" />
              </Col>
              <Col xs={8} className="text-center">
                <h2>
                  Create your{" "}
                  <span style={{ color: "green" }}>
                    <b>WhatsApp</b>
                  </span>{" "}
                  account for free!
                </h2>
              </Col>
            </Navbar>
          </Col>
          <Col className="offset-1" style={{ marginTop: "10rem" }} xs={10}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                width: "100%",
              }}
              className=" pl-2 pr-2 pt-4 p-md-5 shadow-lg"
            >
              <Form>
                <Row>
                  <Col md={6} xs={12} className="">
                    <Form.Group controlId="formBasicEmail" className="">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Example : jack@gmail.com"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={6} xs={12}>
                    <Form.Group controlId="formBasicEmail" className="">
                      <Form.Label>
                        <b>User Name</b>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Example : jack" />
                    </Form.Group>
                  </Col>
                  <Col md={6} xs={12} className="m-auto">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>
                        <b>Password</b>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions"
                      />
                    </Form.Group>

                    <Button variant="success" type="submit">
                      Sign up
                    </Button>
                    <p
                      onClick={() => setHaveAccount(true)}
                      style={{ cursor: "pointer" }}
                      className="text-muted mt-3"
                    >
                      <b> Already have an account ? log in here!</b>
                    </p>
                  </Col>
                  <Col xs={12}>
                    <Row className="mt-5">
                      <Col xs={12} lg={5} className="text-lg-right">
                        <span>--------------------</span>
                      </Col>
                      <Col xs={12} lg={2}>
                        <div className="">OR</div>
                      </Col>
                      <Col xs={12} lg={5} className="text-lg-left">
                        <span>--------------------</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <div className="mt-4 d-flex align-items-center justify-content-center mb-md-0 mb-3">
                      <div
                        style={{
                          border: "4px #1A8BF6 solid",
                          cursor: "pointer",
                        }}
                        className="text-center pt-3 pb-3 pl-3 pr-3"
                      >
                        <FaGoogle style={{ color: "#46A1F8" }} />
                      </div>
                      <div
                        className="text-white p-3 shadow-lg"
                        style={{
                          backgroundColor: "#1A8BF6",
                          border: "4px #1A8BF6 solid",
                          cursor: "pointer",
                        }}
                      >
                        Sign in with <b>google</b>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
        <Col xs={12} className="pr-0 pl-0">
          <Navbar
            className="pb-3 pt-3"
            style={{ backgroundColor: "whiteSmoke" }}
          >
            <Col xs={2} className="text-left">
              <FaWhatsapp className="whatsappIcon" />
            </Col>
            <Col xs={8} className="text-center">
              <h2>
                Login to your{" "}
                <span style={{ color: "green" }}>
                  <b>WhatsApp</b>
                </span>{" "}
                account
              </h2>
            </Col>
          </Navbar>
        </Col>
        <Col className="offset-1" style={{ marginTop: "10rem" }} xs={10}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              width: "100%",
            }}
            className=" pl-2 pr-2 pt-4 p-md-5 shadow-lg"
          >
            <Form>
              <Row>
                <Col md={12} xs={12} className="">
                  <Form.Group controlId="formBasicEmail" className="">
                    <Form.Label>
                      <b>Email address</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Example : jack@gmail.com"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={12} xs={12} className="m-auto">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <b>Password</b>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Save email & password"
                    />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Log in
                  </Button>
                  <p
                    onClick={() => setHaveAccount(false)}
                    style={{ cursor: "pointer" }}
                    className="text-muted mt-3"
                  >
                    <b> Don't have an account ? make one here!</b>
                  </p>
                </Col>
                <Col xs={12}>
                  <Row className="mt-5">
                    <Col xs={12} lg={5} className="text-lg-right">
                      <span>--------------------</span>
                    </Col>
                    <Col xs={12} lg={2}>
                      <div className="">OR</div>
                    </Col>
                    <Col xs={12} lg={5} className="text-lg-left">
                      <span>--------------------</span>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <div className="mt-4 d-flex align-items-center justify-content-center mb-md-0 mb-3">
                    <div
                      style={{
                        border: "4px #1A8BF6 solid",
                        cursor: "pointer",
                      }}
                      className="text-center pt-3 pb-3 pl-3 pr-3"
                    >
                      <FaGoogle style={{ color: "#46A1F8" }} />
                    </div>
                    <div
                      className="text-white p-3 shadow-lg"
                      style={{
                        backgroundColor: "#1A8BF6",
                        border: "4px #1A8BF6 solid",
                        cursor: "pointer",
                      }}
                    >
                      log in with <b>google</b>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
      )}
    </Container>
  );
};

export default RegisterPage;
