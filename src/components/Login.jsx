import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //--To retrieve user data from local storage--//
  const handleLogin = (event) => {
    event.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email / Password!");
    }
  };

  return (
    <>
      <section className="vh-100 vw-100">
        <Container>
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
              <Card
                style={{ borderRadius: "15px", backgroundColor: "#eeecda" }}
              >
                <Card.Body className="p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Log-in Account
                  </h2>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-4" controlId="formEmailLogin">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        name="email"
                        value={input.email}
                        onChange={(event) =>
                          setInput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }
                        type="email"
                        id="formEmailLogin"
                        size="lg"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formPasswordLogin">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        value={input.password}
                        onChange={(event) =>
                          setInput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }
                        type="password"
                        id="formPasswordLogin"
                        size="lg"
                        required
                      />
                    </Form.Group>

                    <Button type="submit" variant="success" size="lg">
                      Login
                    </Button>

                    <p className="text-center text-muted mt-5 mb-0">
                      Don&apos;t have an account yet?{" "}
                      <Link to="/register" className="fw-medium text-primary">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
