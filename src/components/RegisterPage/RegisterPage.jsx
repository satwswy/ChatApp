import { useEffect, useState } from "react";
import { Col, Container, Form, Navbar, Row, Button, Badge } from "react-bootstrap/esm";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Registerpage.css";
<link
  rel="stylesheet"
  type="text/css"
  href="//fonts.googleapis.com/css?family=Open+Sans"
/>;

const RegisterPage = () => {
  const [isLoading,setIsLoading] = useState(false)
  // for changing between sign up and log in
  const [haveAccount, setHaveAccount] = useState(false);

  // for badge
  const [isFilled, setIsFilled] = useState(true)

  // for wrong Username or password
  const [isCorrect , setIsCorrect] = useState(true)

  // for posting
  const [username , setusername] = useState('');
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [token , setToken] = useState([])

  const registerPost = async (e) => {
    e.preventDefault();
    const userInfos = {username , email , password}
    console.log(userInfos);
    try {
      setIsFilled(true)
      if(username !== '' && password !== '' && email !== ''){
      let response = await fetch('http://localhost:3009/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(userInfos)
      })
        if(response.ok){
          let data = await response.json()
          console.log(data , "voilaaa the data");
          setHaveAccount(true)
        } else {
          console.log("error with response");
        }
      } else{
        setIsFilled(false)
      }
    } catch (error) {
      console.log(error , "eerrrror bro");
      setHaveAccount(false)
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setIsCorrect(true)
    },3200)
  },[isCorrect])


  const navigate = useNavigate()


  const loginUser = async (e) =>{
    e.preventDefault();
    const userInfos = {email , password};
    console.log(userInfos);
    try {
      if(password !== '' && email !== ''){
        setIsFilled(true)
      let response = await fetch(`http://localhost:3009/users/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(userInfos)
      })
      if(response.ok){
        let data = await response.json()
        setToken(data)
        setIsLoading(true)
        setTimeout(()=>{
          setIsLoading(false)
          navigate('/homepage')
        },3000) 
      }else{
        console.log("response error");
        setIsCorrect(false)
      }
    }else{
      setIsFilled(false)
    }
    } catch (error) {
      console.log(error,"error buddy");
      
    }
  }

  useEffect(() => {
      console.log(token.acessToken, "Thats the token");
      window.localStorage.setItem("SetToken",JSON.stringify(token.acessToken))
      console.log(window.localStorage.getItem("SetToken"),"token stored!");
  }, [token]);
  return (
    <Container fluid style={{ backgroundColor: "#204E4A",minHeight:"100vh" }} className="pb-5">
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
              className=" pl-2 pr-2 pt-4 p-md-5 shadow-lg mx-auto signupContainer"
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
                        value={email}
                        onChange={(e)=> setemail(e.target.value)}
                        style={{width:"70%"}}
                        className="ml-auto mr-auto"
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
                      <Form.Control 
                      type="email"
                       placeholder="Example : jack" 
                       value={username}
                       onChange={(e)=> setusername(e.target.value)}
                       style={{width:"70%"}}
                       className="ml-auto mr-auto"/>
                       
                    </Form.Group>
                  </Col>
                  <Col md={6} xs={12} className="m-auto">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>
                        <b>Password</b>
                      </Form.Label>
                      <Form.Control 
                      type="password"
                       placeholder="Password" 
                       value={password}
                       onChange={(e)=> setpassword(e.target.value)}
                       style={{width:"70%"}}
                       className="ml-auto mr-auto"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={registerPost} >
                      Sign up
                    </Button>
                    {isFilled === false ?                     <div>
                    <Badge className="p-3 mt-4" variant="danger">Please fill all the requirements!</Badge>{' '}
                    </div> : <></> }

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
      ) : isLoading === true ? (
        <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div> ): (
        
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
            className=" pl-2 pr-2 pt-4 p-md-5 shadow-lg signupContainer mx-auto"
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
                      value={email}
                      onChange={(e)=> setemail(e.target.value)}
                      style={{width:"60%"}}
                      className="ml-auto mr-auto"
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
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}
                    style={{width:"60%"}}
                    className="ml-auto mr-auto"/>
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Save email & password"
                    />
                  </Form.Group>
                    <Button variant="success" type="submit" onClick={loginUser}>
                  Log In
                  </Button>
                  {isFilled === false ?                     <div>
                    <Badge className="p-3 mt-4" variant="danger">Please fill all the requirements!</Badge>{' '}
                    </div> : <></> }
                    {isCorrect === false ?
                            <div>
                            <Badge className="p-3 mt-4" variant="danger">Wrong email or password</Badge>{' '}
                            </div> : <></>}
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
